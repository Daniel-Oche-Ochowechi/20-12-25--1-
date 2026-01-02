import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { validateBrochureUrl } from "@/lib/brochure-url-mapping"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, brochureType, country, brochureUrl } = body

    // Validate required fields
    if (!fullName || !email || !phone || !brochureType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate brochure type
    if (!["citizenship", "residency"].includes(brochureType)) {
      return NextResponse.json({ error: "Invalid brochure type" }, { status: 400 })
    }

    if (country && brochureUrl) {
      const isValidUrl = validateBrochureUrl(country, brochureType, brochureUrl)
      if (!isValidUrl) {
        console.error(`[v0] Invalid brochure URL for ${country} ${brochureType}`)
        return NextResponse.json(
          {
            error: "Invalid brochure URL for the selected program. Please refresh the page and try again.",
          },
          { status: 400 },
        )
      }
      console.log(`[v0] Brochure URL validated successfully for ${country} ${brochureType}`)
    }

    // Create Supabase client
    const cookieStore = await cookies()
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    })

    // Insert lead into database
    const { data, error } = await supabase
      .from("brochure_leads")
      .insert({
        full_name: fullName,
        email,
        phone,
        brochure_type: brochureType,
        country: country || null,
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error inserting brochure lead:", error)
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
    }

    console.log(`[v0] Successfully saved brochure lead for ${country || "unknown"} ${brochureType}`)
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in brochure-leads API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Create Supabase client for authentication check
    const cookieStore = await cookies()
    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    })

    // Check if user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch all brochure leads
    const { data: leads, error } = await supabase
      .from("brochure_leads")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching brochure leads:", error)
      return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
    }

    return NextResponse.json({ leads }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in brochure-leads GET API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
