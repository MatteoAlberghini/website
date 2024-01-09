/* types */
export type DefaultResponseType = {
  success: boolean,
  error?: string,
}
export type GetResponseType = DefaultResponseType & {
  data: Object | Object[] | null,
}

/* requests */
export async function getRequest<T extends Object>(url: string): Promise<T> {
  const requestInit: RequestInit = { method: 'GET' }
  requestInit.headers = { 'content-type': 'application/json' }
  try {
    const response = await fetch(url, requestInit)
    return response.json()
  } catch(e: any) {
    throw(e)
  }
}
export async function postRequest<T extends Object>(url: string, params: FormData | null): Promise<T> {
  const requestInit: RequestInit = { method: 'POST' }
  requestInit.headers = { 'content-type': 'application/json' }
  if (params !== null) { requestInit.body = JSON.stringify(Object.fromEntries(params)) }
  try {
    const response = await fetch(url, requestInit)
    return response.json()
  } catch(e: any) {
    throw(e)
  }
}