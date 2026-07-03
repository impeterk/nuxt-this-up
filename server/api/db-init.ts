const content = `
Comark is **Components in Markdown** — it extends standard Markdown with a powerful component syntax.

## Inline formatting

You can use all the usual Markdown formatting: **bold**, *italic*, , and [links](https://comark.dev){target="_blank"}.

## Components

Components use the  syntax. They can have attributes and children:


## Lists

Comark handles lists, of course:

- First item
- Second item with **bold** text
- Third item with 

1. Numbered items work too
2. With full Markdown support inside

## Code blocks

Syntax highlighting works out of the box:

## Block quotes

> Comark makes Markdown more powerful without sacrificing simplicity.
`
export default defineEventHandler(async () => {
  const db = useDatabase()
  // Create posts table
  await db.sql`DROP TABLE IF EXISTS posts`
  await db.sql`CREATE TABLE IF NOT EXISTS posts ("slug" TEXT PRIMARY KEY, "title" TEXT, "description" TEXT, "created_at" NUMBER, "content" TEXT)`

  // Add a new post
  const title = 'Comark Syntax Guide'
  const slug = title.toLowerCase().replaceAll(' ', '-')
  const description = 'A quick tour of what you can do with Comark\'s component syntax.'

  const created_at = Date.now()
  await db.sql`INSERT INTO posts VALUES (${slug}, ${title}, ${description}, ${created_at}, ${content})`

  const { rows } = await db.sql`SELECT * FROM posts`
  return rows
})
