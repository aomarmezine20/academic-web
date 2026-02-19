import { NextRequest, NextResponse } from 'next/server'
import { uploadImage, uploadVideo } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const type = formData.get('type') as string // 'image' or 'video'

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    let url: string
    if (type === 'video') {
      url = await uploadVideo(file)
    } else {
      url = await uploadImage(file)
    }

    return NextResponse.json({ url })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
  }
}