-- Add phone column to move_guide_leads
ALTER TABLE public.move_guide_leads ADD COLUMN phone text;

-- Make email nullable since we're switching to phone
ALTER TABLE public.move_guide_leads ALTER COLUMN email DROP NOT NULL;