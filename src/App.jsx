import { useEffect, useState } from 'react'
import { PostCard } from './components/posts/PostCard.jsx'
import { fetchPosts } from './api/fetchPosts'
import { PostCardSkeleton } from './components/skeletons/PostCardSkeleton.jsx'

function App() {
  // Creamos un estado para guardar los posts y otro para indicar si se están cargando los posts
  const [posts, setPosts] = useState([]) // Inicializamos el estado de posts con un array vacío
  const [loading, setLoading] = useState(true) // Inicializamos el estado de loading en true (indicando que se están cargando los posts)

  // Para cargar los posts, usamos useEffect. useEffect se ejecuta después de que el componente se monta en el DOM.
  // Es importante tener que la función que pasamos a useEffect no puede ser async, por lo que no podemos usar
  // async/await directamente en useEffect. Para solucionar esto, podemos crear una función dentro de useEffect
  // y llamarla inmediatamente.
  useEffect(() => {
    const fetchPostsAwait = async () => {
      try {
        const posts = await fetchPosts()
        setPosts(posts)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPostsAwait()
  }, [])

  return (
    <section className="container mx-auto min-h-dvh w-dvw py-6">
      <header>
        <h1 className="mb-8 text-3xl font-bold">Prueba de useEffect</h1>
      </header>
      <article>
        <h2 className="mb-2 text-xl font-bold">Posts</h2>

        <div className="grid grid-cols-2 gap-4">
          {loading // Mientras esta cargando, mostramos los esqueletos de los posts
            ? Array.from({ length: 6 }).map((_, index) => (
                <PostCardSkeleton key={index} />
              ))
            : // Una vez que se cargaron los posts, mostramos los posts (Usamos map para recorrer el array de posts y
              // mostrar cada uno de ellos)
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  body={post.content}
                  publishedAt={post.publishedAt}
                />
              ))}
        </div>
      </article>
    </section>
  )
}

export default App
