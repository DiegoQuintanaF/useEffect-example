const URL_API = 'https://jsonplaceholder.org'

export const fetchPosts = async () => {
  const response = await fetch(`${URL_API}/posts`)

  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  } else if (response.status === 404) {
    throw new Error('Page not found')
  }

  const posts = await response.json()
  return posts
}
