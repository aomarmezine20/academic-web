import { query } from './db'

// Database functions (use central db.query which is lazy and reports helpful errors)
export const getArticles = async () => {
  const res = await query('SELECT * FROM articles ORDER BY created_at DESC')
  return res.rows
}

export const createArticle = async (article: { title: string; content: string }) => {
  const res = await query(
    'INSERT INTO articles (title, content) VALUES ($1, $2) RETURNING *',
    [article.title, article.content]
  )
  return res.rows[0]
}

export const getEvents = async () => {
  const res = await query('SELECT * FROM events ORDER BY date DESC')
  return res.rows
}

export const createEvent = async (event: { title: string; description: string; date: string }) => {
  const res = await query(
    'INSERT INTO events (title, description, date) VALUES ($1, $2, $3) RETURNING *',
    [event.title, event.description, event.date]
  )
  return res.rows[0]
}

export const getPublications = async () => {
  const res = await query('SELECT * FROM publications ORDER BY created_at DESC')
  return res.rows
}

export const createPublication = async (publication: { title: string; description: string; file_url: string }) => {
  const res = await query(
    'INSERT INTO publications (title, description, file_url) VALUES ($1, $2, $3) RETURNING *',
    [publication.title, publication.description, publication.file_url]
  )
  return res.rows[0]
}

// Storage functions using Vercel Blob REST API
export const uploadImage = async (file: File, filename?: string) => {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) throw new Error('BLOB_READ_WRITE_TOKEN not set')

  const fileName = filename || `${Date.now()}-${file.name}`
  const url = `https://blob.vercel-storage.com/${fileName}`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': file.type,
      'x-amz-acl': 'public-read',
    },
    body: file,
  })

  if (!response.ok) {
    throw new Error(`Failed to upload: ${response.statusText}`)
  }

  return url
}

export const uploadVideo = async (file: File, filename?: string) => {
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (!token) throw new Error('BLOB_READ_WRITE_TOKEN not set')

  const fileName = filename || `${Date.now()}-${file.name}`
  const url = `https://blob.vercel-storage.com/${fileName}`

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': file.type,
      'x-amz-acl': 'public-read',
    },
    body: file,
  })

  if (!response.ok) {
    throw new Error(`Failed to upload: ${response.statusText}`)
  }

  return url
}