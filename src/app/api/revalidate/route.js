import { revalidatePath } from 'next/cache';

const MY_SECRET_TOKEN = process.env.REVALIDATE_TOKEN;

export async function POST(request) {
  const token = request.headers.get('authorization');
  const path = request.nextUrl.searchParams.get('path');


  console.log("Webhook received from Strapi");
  // Verifikasi token
  if (token !== `Bearer ${MY_SECRET_TOKEN}`) {
    console.log("Unauthorized access attempt");
    return new Response(JSON.stringify({
      revalidated: false,
      message: 'Unauthorized access',
    }), { status: 401 });
  }

  if (path) {
    revalidatePath(path);
    console.log("Revalidated path:", path);
    return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  }), { status: 400, headers: { 'Content-Type': 'application/json' } });
}
