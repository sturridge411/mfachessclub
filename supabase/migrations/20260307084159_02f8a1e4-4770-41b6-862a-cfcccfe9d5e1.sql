CREATE TABLE public.player_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  elo TEXT NOT NULL DEFAULT 'Unrated',
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  approved BOOLEAN NOT NULL DEFAULT false
);

ALTER TABLE public.player_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit" ON public.player_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved" ON public.player_submissions
  FOR SELECT TO anon, authenticated
  USING (approved = true);