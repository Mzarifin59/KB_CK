import { revalidatePath } from 'next/cache';

const MY_SECRET_TOKEN = process.env.REVALIDATE_TOKEN;

export async function POST(request) {
  const token = request.headers.get('authorization');
  const path = request.nextUrl.searchParams.get('path')

  if (token !== `Bearer ${MY_SECRET_TOKEN}`) {
    console.log("Unauthorized access attempt");
    return new Response(JSON.stringify({
      revalidated: false,
      message: 'Unauthorized access',
    }), { status: 401 });
  }

  if (path) {
    revalidatePath(path);

    return new Response(JSON.stringify({
      revalidated: true,
      path: path,
      now: Date.now()
    }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200
    })
  }

  return new Response(JSON.stringify({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  }), { status: 400, headers: { 'Content-Type': 'application/json' } });
}
