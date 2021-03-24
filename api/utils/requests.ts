import fetch from 'isomorphic-unfetch'

import { ResponseError } from '../errors/errors'

export const getApiUrl = (baseUrl: string, query: string, appId?: string, units = 'metric'): string =>
    `${baseUrl}?q=${query}&appid=${appId}&units=${units}`

const checkStatus = async (response: Response): Promise<Response> => {
    if (response.ok) {
        return response
    }

    const error = new ResponseError(response.statusText, response)

    return Promise.reject(error)
}

export const fetchAsJson = async (url: string, options: RequestInit = {}): Promise<any> => {
    try {
        const response = await fetch(url, options)
        const data = await checkStatus(response)

        return await data.json()
    } catch (e) {
        console.error(`Cannot fetch request by url: ${url}, message: ${e.message}`)
        throw e
    }
}

export const fetchJSON = async (url: string, options: RequestInit = {}): Promise<any> => {
    const data = await fetch(url, options)
    const response = await checkStatus(data)

    return await response.json()
}

export const jsonFromURL = async (url: string, param: string): Promise<string> => {
    if (param) {
        url += encodeURIComponent(param)
    }

    const option = {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await fetch(url, option)
    return await res.json()
}

export const toBase64ImageUrl = async (request: RequestInfo): Promise<string> => {
    const fetchImageUrl = await fetch(request)
    const responseArrBuffer = await fetchImageUrl.arrayBuffer()

    return `data:${fetchImageUrl.headers.get('Content-Type') || 'image/png'};base64,${Buffer.from(
        responseArrBuffer
    ).toString('base64')}`
}
