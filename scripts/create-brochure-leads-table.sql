-- Create table for brochure download leads
CREATE TABLE IF NOT EXISTS brochure_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  brochure_type TEXT NOT NULL CHECK (brochure_type IN ('citizenship', 'residency')),
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE brochure_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (submit form)
CREATE POLICY "anyone_insert_brochure_leads"
  ON brochure_leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only authenticated admin users can view
CREATE POLICY "admin_view_brochure_leads"
  ON brochure_leads
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  );

-- Policy: Only authenticated admin users can delete
CREATE POLICY "admin_delete_brochure_leads"
  ON brochure_leads
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  );

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_brochure_leads_created_at ON brochure_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_brochure_leads_email ON brochure_leads(email);
