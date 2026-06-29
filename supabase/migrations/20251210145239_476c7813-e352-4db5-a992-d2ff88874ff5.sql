-- Drop the restrictive select policy
DROP POLICY IF EXISTS "No public read access to leads" ON public.move_guide_leads;

-- Create a new policy that allows reading all leads (admin dashboard needs this)
CREATE POLICY "Allow reading all leads"
ON public.move_guide_leads
FOR SELECT
USING (true);