import { NextRequest, NextResponse } from 'next/server'
import { getArticles, createArticle } from '../../../lib/supabase'

export async function GET() {
  try {
    const articles = await getArticles()
    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const article = await createArticle(body)
    return NextResponse.json(article)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 })
  }
}