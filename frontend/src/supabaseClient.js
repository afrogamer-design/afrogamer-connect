import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kodicbboapdsowvgicmx.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZGljYmJvYXBkc293dmdpY214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMjU3NDcsImV4cCI6MjA3MjgwMTc0N30.-WNqa2YryN90Wsr4oe-vTuMWxSt_SH3r2-sL9LmLDjU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
