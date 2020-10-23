export const fetcher = async (url: string) => {
  const res = await fetch(url)
  return res.json()
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

const imageUrl = (options: string, image: string) => {
  return `https://res.cloudinary.com/petertumulty/image/upload${
    options !== null ? options : '/'
  }v1602980583/${image}`
}

function getExtension(os: string) {
  let extension

  if (os === 'Windows') {
    extension = 'webp'
  }

  if (os === 'iOS') {
    extension = 'jpg'
  }

  if (os === 'Android') {
    extension = 'webp'
  }

  return extension
}

function imgOptions(shadow: boolean, options: any) {
  if (options === null && shadow === true) {
    return `/e_shadow:60/`
  }

  if (options !== null && shadow === true) {
    return `/e_shadow:60/${options}/`
  }

  if (shadow === false && options !== null) {
    return `/${options}/`
  }

  if (options === null && shadow === false) {
    return '/'
  }
}

export const formatImageUrl = (
  shadow: boolean,
  image: string,
  options: string,
  os: string
) => {
  return `${imageUrl(imgOptions(shadow, options), image)}.${getExtension(os)}`
}
