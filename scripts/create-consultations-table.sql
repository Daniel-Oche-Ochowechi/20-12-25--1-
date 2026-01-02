-- Create consultations table for storing consultation requests
CREATE TABLE IF NOT EXISTS public.consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  country TEXT NOT NULL,
  program_type TEXT NOT NULL CHECK (program_type IN ('citizenship', 'residency')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'scheduled', 'completed', 'cancelled')),
  scheduled_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.consultations ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert consultation requests
CREATE POLICY anyone_insert_consultations ON public.consultations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Admins can view all consultations
CREATE POLICY admin_view_consultations ON public.consultations
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  );

-- Policy: Admins can update consultations
CREATE POLICY admin_update_consultations ON public.consultations
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  );

-- Policy: Admins can delete consultations
CREATE POLICY admin_delete_consultations ON public.consultations
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_approved = true
    )
  );

-- Create indexes for better query performance
CREATE INDEX idx_consultations_status ON public.consultations(status);
CREATE INDEX idx_consultations_created_at ON public.consultations(created_at DESC);
CREATE INDEX idx_consultations_country ON public.consultations(country);
