import { NextRequest, NextResponse } from 'next/server'
import { getPublications, createPublication } from '../../../lib/supabase'

export async function GET() {
  try {
    const publications = await getPublications()
    return NextResponse.json(publications)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch publications' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const publication = await createPublication(body)
    return NextResponse.json(publication)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create publication' }, { status: 500 })
  }
}