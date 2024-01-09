/* db */
import { dbClient } from '$lib/supabase.client.js'

/* requests */
export async function POST({ request }) {
  try {
    /// parse body and check for errors
    const body = await request.json()
    if ('info' in body && typeof body.info === 'string' && body.info.length === 0) {
      return new Response(JSON.stringify({ success: false, error: 'message field is required' }))
    }
    if ('info' in body && typeof body.info === 'string' && body.info.length > 300) {
      return new Response(JSON.stringify({ success: false, error: 'message field is too long' }))
    }
    if ('username' in body && typeof body.username === 'string' && body.username.length > 50) {
      return new Response(JSON.stringify({ success: false, error: 'alias field is too long' }))
    }
    const { error } = await dbClient.from('contact').insert({
      username: body.username,
      info: body.info,
    })
    if (error === null) {
      return new Response(JSON.stringify({ success: true }))
    }
    return new Response(JSON.stringify({ success: false, error: 'database error' }))
  } catch(e: any) {
    return new Response(JSON.stringify({ success: false, error: 'unable to parse body response' }))
  }
}
export async function GET() {
  /// pull data from db
  const { data } = await dbClient.from('contact').select()
  if (data !== null) {
    return new Response(JSON.stringify({ success: true, data }))
  }
  return new Response(JSON.stringify({ success: false, error: 'database error', data: [] }))
}