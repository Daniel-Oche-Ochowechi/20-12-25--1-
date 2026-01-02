-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Create admin_users table for admin-specific data
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW())
);

-- Enable RLS on all tables
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions (admin only)
CREATE POLICY "admin_view_contact_submissions" 
  ON public.contact_submissions FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));

CREATE POLICY "anyone_insert_contact_submissions" 
  ON public.contact_submissions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "admin_delete_contact_submissions" 
  ON public.contact_submissions FOR DELETE 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));

-- RLS Policies for newsletter_subscriptions (admin view, anyone subscribe)
CREATE POLICY "admin_view_newsletter" 
  ON public.newsletter_subscriptions FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));

CREATE POLICY "anyone_subscribe_newsletter" 
  ON public.newsletter_subscriptions FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "admin_delete_newsletter" 
  ON public.newsletter_subscriptions FOR DELETE 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));

-- RLS Policies for admin_users (admins only)
CREATE POLICY "admin_view_admin_users" 
  ON public.admin_users FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));

CREATE POLICY "admin_update_admin_users" 
  ON public.admin_users FOR UPDATE 
  USING (EXISTS (SELECT 1 FROM public.admin_users WHERE admin_users.id = auth.uid()));
