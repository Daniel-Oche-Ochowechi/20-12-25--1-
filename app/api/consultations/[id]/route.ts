import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await request.json()
    const { status, scheduledDate, notes } = body

    const supabase = await createClient()

    // Check if user is authenticated and is an admin
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Update consultation
    const updateData: any = {}
    if (status) updateData.status = status
    if (scheduledDate) updateData.scheduled_date = scheduledDate
    if (notes !== undefined) updateData.notes = notes

    const { data, error } = await supabase.from("consultations").update(updateData).eq("id", id).select().single()

    if (error) {
      console.error("[v0] Error updating consultation:", error)
      return NextResponse.json({ error: "Failed to update consultation" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in consultation PATCH API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const supabase = await createClient()

    // Check if user is authenticated and is an admin
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { error } = await supabase.from("consultations").delete().eq("id", id)

    if (error) {
      console.error("[v0] Error deleting consultation:", error)
      return NextResponse.json({ error: "Failed to delete consultation" }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error in consultation DELETE API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
