// /app/api/dreams/route.ts
import { NextResponse } from 'next/server';
import { createDream } from '@/lib/prisma';

export async function POST(request: Request) {
  const { title, content } = await request.json();

  if (!title || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
  }

  try {
    const dream = await createDream(title, content);
    return NextResponse.json(dream);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create dream entry' }, { status: 500 });
  }
}