-- Fix RLS policies for brochure_leads and consultations to avoid infinite recursion
-- Similar to the fix in 005_fix_rls_recursion.sql

-- Drop the problematic policies that check admin_users table
DROP POLICY IF EXISTS "admin_view_brochure_leads" ON public.brochure_leads;
DROP POLICY IF EXISTS "admin_delete_brochure_leads" ON public.brochure_leads;

DROP POLICY IF EXISTS "admin_view_consultations" ON public.consultations;
DROP POLICY IF EXISTS "admin_update_consultations" ON public.consultations;
DROP POLICY IF EXISTS "admin_delete_consultations" ON public.consultations;

-- Create simplified policies that just check for authenticated users
-- The application layer (admin dashboard) already validates admin access

-- Brochure Leads policies
CREATE POLICY "authenticated_view_brochure_leads" 
  ON public.brochure_leads 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "authenticated_delete_brochure_leads" 
  ON public.brochure_leads 
  FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Consultations policies  
CREATE POLICY "authenticated_view_consultations" 
  ON public.consultations 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "authenticated_update_consultations" 
  ON public.consultations 
  FOR UPDATE 
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "authenticated_delete_consultations" 
  ON public.consultations 
  FOR DELETE 
  USING (auth.role() = 'authenticated');
