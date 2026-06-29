-- Create table to track ambassador shares
CREATE TABLE public.ambassador_shares (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  share_method TEXT NOT NULL,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.ambassador_shares ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (track shares)
CREATE POLICY "Anyone can record shares" 
ON public.ambassador_shares 
FOR INSERT 
WITH CHECK (true);

-- Allow reading all shares (for admin dashboard)
CREATE POLICY "Allow reading all shares" 
ON public.ambassador_shares 
FOR SELECT 
USING (true);