-- Add restrictive SELECT policy - no client-side access to leads data
-- Only service role (edge functions) can access this table
CREATE POLICY "No public read access to leads"
ON public.move_guide_leads
FOR SELECT
USING (false);