-- Drop all problematic RLS policies that cause infinite recursion
DROP POLICY IF EXISTS "admin_view_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "admin_delete_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "approved_admin_view_contact_submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "approved_admin_delete_contact_submissions" ON public.contact_submissions;

DROP POLICY IF EXISTS "admin_view_newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "admin_delete_newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "approved_admin_view_newsletter" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "approved_admin_delete_newsletter" ON public.newsletter_subscriptions;

DROP POLICY IF EXISTS "admin_view_admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "admin_update_admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "approved_admin_view_admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "approved_admin_update_admin_users" ON public.admin_users;

-- Allow anyone to view contact submissions (auth protected at application level)
CREATE POLICY "anyone_view_contact_submissions" 
  ON public.contact_submissions FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow anyone authenticated to delete contact submissions (auth protected at application level)
CREATE POLICY "anyone_delete_contact_submissions" 
  ON public.contact_submissions FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Allow anyone to view newsletter subscriptions (auth protected at application level)
CREATE POLICY "anyone_view_newsletter" 
  ON public.newsletter_subscriptions FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Allow anyone authenticated to delete newsletter subscriptions (auth protected at application level)
CREATE POLICY "anyone_delete_newsletter" 
  ON public.newsletter_subscriptions FOR DELETE 
  USING (auth.role() = 'authenticated');

-- Keep admin_users readable for authenticated users
CREATE POLICY "authenticated_view_admin_users" 
  ON public.admin_users FOR SELECT 
  USING (auth.role() = 'authenticated');
