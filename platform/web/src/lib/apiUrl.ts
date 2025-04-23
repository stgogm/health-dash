const API_URL = import.meta.env.VITE_API_URL

export const getApiUrl = (pathname: string | string[] = '') => {
  const url = new URL(API_URL)

  url.pathname = Array.isArray(pathname) ? pathname.join('/') : pathname

  return url
}
