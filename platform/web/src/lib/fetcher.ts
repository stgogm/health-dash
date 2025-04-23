export const fetcher = (url: URL | string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      console.error(res)
      throw new Error('Network error')
    }

    return res.json()
  })
