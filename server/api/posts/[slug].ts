import { parse } from 'comark'

export default defineEventHandler(async (event) => {
  const db = useDatabase()
  const slug = getRouterParam(event, 'slug')

  const { rows } = await db.sql`SELECT * FROM posts WHERE slug = ${slug}`
  const post = rows?.at(0)
  if (!post) {
    createError({
      status: 400,
      statusText: 'post not found',
    })
  }

  const tree = await parse(post.content as string)
  return {
    slug,
    title: post.title as string,
    description: post.description as string,
    pubDate: post.created_at as number,
    tree,
  }
})
