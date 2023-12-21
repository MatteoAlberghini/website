/* typescript */
import type { DefaultResponseType, GetResponseType } from '../../../managers/rest.manager.js'
/* support */
import { getDataFromFile, writeToFile } from '../../../support/api.js'

/* requests */
export async function POST({ request }) {
  let response: DefaultResponseType = { success: false }
  try {
    /// parse body and check for errors
    const body = await request.json()
    let isBodyCorrect = true
    if ('info' in body && typeof body.info === 'string' && body.info.length > 0) {
      if (body.info.length < 300) { isBodyCorrect = true }
    }
    if ('username' in body && typeof body.username === 'string') {
      if (body.info.length > 50) { isBodyCorrect = false }
    }
    if (isBodyCorrect) {
      response = await writeToFile('./db/contact.db.json', body)
    }
  } catch(e: any) {
    /// return general error
    response.success = false
    response.error = 'Unable to parse body response'
  }
  return new Response(JSON.stringify(response))
}
export async function GET() {
  let response: GetResponseType = { success: false, data: null }
  try {
    response = await getDataFromFile('./db/contact.db.json')
  } catch (e: any) {
    response.success = false
    response.error = 'Unable to get data'
    response.data = null
  }
  return new Response(JSON.stringify(response))
}