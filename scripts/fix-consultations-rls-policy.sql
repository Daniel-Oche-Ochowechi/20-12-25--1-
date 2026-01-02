-- Drop existing policy if it exists
DROP POLICY IF EXISTS anyone_insert_consultations ON public.consultations;

-- Create new policy that allows anonymous users to insert
CREATE POLICY "Enable insert for anonymous users" ON public.consultations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert
CREATE POLICY "Enable insert for authenticated users" ON public.consultations
  FOR INSERT
  TO authenticated
  WITH CHECK (true);
