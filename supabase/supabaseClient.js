import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zjqmzgemkydkvdmhckbt.supabase.co';
const supabaseAnonkey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonkey);