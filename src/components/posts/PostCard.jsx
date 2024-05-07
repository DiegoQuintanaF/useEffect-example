import propTypes from 'prop-types'

export const PostCard = ({ title, body, publishedAt }) => {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-lg bg-neutral-900 p-6">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{body}</p>
      </div>
      <p className="italic opacity-80">{publishedAt}</p>
    </article>
  )
}

PostCard.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  publishedAt: propTypes.string.isRequired
}
