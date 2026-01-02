-- This script should be run ONCE to create the first super admin
-- Replace 'YOUR_USER_ID' with an actual user ID from auth.users table
-- Instructions:
-- 1. Create a test user account through the admin login page
-- 2. Go to Supabase dashboard > Authentication > Users and find their ID
-- 3. Run this query (replace YOUR_USER_ID):

INSERT INTO public.admin_users (id, full_name, role, is_approved) 
VALUES ('YOUR_USER_ID', 'Super Admin', 'super_admin', true)
ON CONFLICT (id) DO UPDATE SET is_approved = true, role = 'super_admin';
