import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { country, programType, fullName, email, phone, preferredDate } = body

    console.log("[v0] Received consultation request:", { country, programType, fullName, email, phone, preferredDate })

    // Validate required fields
    if (!country || !programType || !fullName || !email || !phone || !preferredDate) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate program type
    if (!["citizenship", "residency"].includes(programType)) {
      return NextResponse.json({ error: "Invalid program type" }, { status: 400 })
    }

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

    console.log("[v0] Inserting consultation into database...")

    // Insert consultation request
    const { data, error } = await supabase
      .from("consultations")
      .insert({
        country,
        program_type: programType,
        full_name: fullName,
        email,
        phone,
        preferred_date: preferredDate,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("[v0] Error inserting consultation:", error.message)
      console.error("[v0] Error details:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Consultation inserted successfully:", data)

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully",
        data,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Error in consultations API:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
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

    // Check if user is authenticated and is an admin
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch all consultations
    const { data: consultations, error } = await supabase
      .from("consultations")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("[v0] Error fetching consultations:", error)
      return NextResponse.json({ error: "Failed to fetch consultations" }, { status: 500 })
    }

    return NextResponse.json({ consultations }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in consultations GET API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
