-- Remove the automatic admin trigger that makes all users admins
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Update admin_users table to track approval status
ALTER TABLE public.admin_users 
ADD COLUMN IF NOT EXISTS is_approved BOOLEAN DEFAULT false;

-- Remove all non-approved admins from the system (cleanup)
DELETE FROM public.admin_users WHERE NOT is_approved;

-- Update RLS policies to check for approved admins only
DROP POLICY IF EXISTS "admin_view_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "admin_delete_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "admin_view_newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "admin_delete_newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "admin_view_admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "admin_update_admin_users" ON public.admin_users;

-- Create new RLS policies that check is_approved flag
CREATE POLICY "approved_admin_view_contact_submissions" 
  ON public.contact_submissions FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));

CREATE POLICY "approved_admin_delete_contact_submissions" 
  ON public.contact_submissions FOR DELETE 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));

CREATE POLICY "approved_admin_view_newsletter" 
  ON public.newsletter_subscriptions FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));

CREATE POLICY "approved_admin_delete_newsletter" 
  ON public.newsletter_subscriptions FOR DELETE 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));

CREATE POLICY "approved_admin_view_admin_users" 
  ON public.admin_users FOR SELECT 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));

CREATE POLICY "approved_admin_update_admin_users" 
  ON public.admin_users FOR UPDATE 
  USING (EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.id = auth.uid() AND admin_users.is_approved = true
  ));
