import { NextRequest, NextResponse } from 'next/server'
import { isAdminAuthenticated } from '../../../lib/auth'

export async function GET() {
  try {
    const { query } = await import('../../../lib/db')
    const res = await query('SELECT * FROM announcements ORDER BY created_at DESC')
    return NextResponse.json(res.rows)
  } catch (error) {
    console.error('Failed to fetch announcements', error)
    return NextResponse.json({ error: 'Failed to fetch announcements' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('x-admin-token') || request.headers.get('authorization')
    if (!isAdminAuthenticated(token)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { title, content } = body || {}

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing title or content' }, { status: 400 })
    }

    const { query } = await import('../../../lib/db')
    const res = await query(
      'INSERT INTO announcements (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    )

    return NextResponse.json(res.rows[0])
  } catch (error) {
    console.error('Failed to create announcement', error)
    return NextResponse.json({ error: 'Failed to create announcement' }, { status: 500 })
  }
}
