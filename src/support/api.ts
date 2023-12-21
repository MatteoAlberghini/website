/* support */
import * as fs from 'node:fs/promises'
/* typescript */
import type { DefaultResponseType, GetResponseType } from '../managers/rest.manager'

/* functions */
export async function writeToFile(name: string, writable: Object): Promise<DefaultResponseType> {
  let response: DefaultResponseType = { success: false }
  try {
    const data = await fs.readFile(name, 'utf8')
    try {
      const json = JSON.parse(data)
      if (Array.isArray(json)) { json.push(writable) }
      try {
        fs.writeFile(name, JSON.stringify(json))
        response.success = true
      } catch (e: any) {
        response.success = false
        response.error = 'Unable to write db file'
      }
    } catch(e: any) {
      response.success = false
      response.error = 'Unable to parse db file'
    }
  } catch (e: any) {
    response.success = false
    response.error = 'Unable to read db file'
  }
  return response
}
export async function getDataFromFile(name: string): Promise<GetResponseType> {
  let response: GetResponseType = { success: false, data: null }
  try {
    const data = await fs.readFile(name, 'utf8')
    try {
      const json = JSON.parse(data)
      response.success = true
      response.data = json
    } catch (e: any) {
      response.success = false
      response.error = 'Unable to parse db file'
      response.data = null
    }
  } catch (e: any) {
    response.success = false
    response.error = 'Unable to read db file'
    response.data = null
  }
  return response
}