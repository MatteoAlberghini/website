/* typescript */
import type { Database } from '../types/db'
/* env */
import { SUPABASE_CLIENT_URL, SUPABASE_API_KEY } from '$env/static/private'
/* support */
import { createClient } from '@supabase/supabase-js'

// eslint-disable-next-line @typescript-eslint/typedef
export const dbClient = createClient<Database>(SUPABASE_CLIENT_URL, SUPABASE_API_KEY)