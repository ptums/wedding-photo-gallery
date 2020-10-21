export const fetcher = async (url: string) => {
  const res = await fetch(url)
  return res.json()
}

export const imageUrl = (options: string, image: string) => {
  return `https://res.cloudinary.com/petertumulty/image/upload${
    options ? options : '/'
  }v1602980583/${image}`
}

export const fetchImageForDownload = (imageUrl: string, fileName: string) => {
  return fetch(imageUrl)
    .then((response) => response.blob())
    .then((data) => {
      const url = window.URL.createObjectURL(data)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url

      a.download = fileName
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    })
}
