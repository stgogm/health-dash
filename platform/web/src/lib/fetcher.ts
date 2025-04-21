export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      console.error(res)
      throw new Error('Network error')
    }

    return res.json()
  })
