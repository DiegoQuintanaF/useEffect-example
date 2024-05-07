export const PostCardSkeleton = () => {
  return (
    <article className="flex h-96 animate-pulse flex-col justify-between gap-4 rounded-lg bg-neutral-900 p-6">
      <div className="flex flex-col gap-4">
        <div className="mb-4 h-6 w-4/5 rounded-xl bg-neutral-800" />
        <div className="h-4 w-full rounded-xl bg-neutral-800" />
        <div className="h-4 w-[90%] rounded-xl bg-neutral-800" />
        <div className="h-4 w-[85%] rounded-xl bg-neutral-800" />
        <div className="h-4 w-[91%] rounded-xl bg-neutral-800" />
        <div className="h-4 w-[92%] rounded-xl bg-neutral-800" />
        <div className="h-4 w-[97%] rounded-xl bg-neutral-800" />
        <div className="h-4 w-[89%] rounded-xl bg-neutral-800" />
      </div>

      <div className="h-4 w-1/4 rounded-xl bg-neutral-800"></div>
    </article>
  )
}
