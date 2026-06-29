-- Create a table for move guide leads
CREATE TABLE public.move_guide_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.move_guide_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit their email" 
ON public.move_guide_leads 
FOR INSERT 
WITH CHECK (true);

-- Create unique constraint on email to prevent duplicates
CREATE UNIQUE INDEX move_guide_leads_email_unique ON public.move_guide_leads (email);