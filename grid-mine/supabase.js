import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://avkhptsnurrgobwwomgx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2a2hwdHNudXJyZ29id3dvbWd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2NjQ3MDAsImV4cCI6MjAyMjI0MDcwMH0.RC1-JzrWQ8CtNfo5er_82u-OQSEvhiJkDIz0KUygcks'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase