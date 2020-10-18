export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
}

export const imageUrl = (options: string, image: string) => {
  return`https://res.cloudinary.com/petertumulty/image/upload${
    options ? options : '/'
  }v1602980583/${image}`
}