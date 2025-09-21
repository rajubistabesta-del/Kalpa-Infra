import { NextResponse } from 'next/server';
import db from '@/lib/db';  // ✅ default import

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const message = data.message;

    console.log('Inquiry received:', message);

    return NextResponse.json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    console.error('Error in inquiry API route:', error);
    return NextResponse.json({ message: "Failed to submit inquiry." }, { status: 500 });
  }
}

