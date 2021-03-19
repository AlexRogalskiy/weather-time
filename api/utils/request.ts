import fetch from 'isomorphic-unfetch'

export const getApiUrl = (baseUrl: string, query: string, appid: string, units = 'metric'): string =>
    `${baseUrl}?q=${query}&appid=${appid}&units=${units}`

const checkStatus = async (response): Promise<Response> => {
    if (response.ok) {
        return response
    }
    const error = new Error(response.statusText)
    error.message = response

    return Promise.reject(error)
}

export const fetchCall = async (url: string, options: RequestInit = {}): Promise<any> => {
    try {
        const response = await fetch(url, options)

        return await response.json()
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

export const jsonFromUR = async (url: string, param: string): Promise<string> => {
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
