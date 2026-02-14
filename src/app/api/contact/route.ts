import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validators/contact';
import { MockContactService } from '@/services/contact/contact-service';

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const service = new MockContactService();
  const result = await service.sendMessage(parsed.data);

  return NextResponse.json(result);
}
