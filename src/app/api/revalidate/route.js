import { revalidatePath } from 'next/cache';

const MY_SECRET_TOKEN = process.env.REVALIDATE_TOKEN;

export async function POST(request) {
  const token = request.headers.get('authorization');
  const paths = request.nextUrl.searchParams.get('paths')

  if (token !== `Bearer ${MY_SECRET_TOKEN}`) {
    console.log("Unauthorized access attempt");
    return new Response(JSON.stringify({
      revalidated: false,
      message: 'Unauthorized access',
    }), { status: 401 });
  }

  if (path) {
    const pathList = paths.split(',')
    pathList.forEach((path) => revalidatePath(path.trim()))

    return new Response(JSON.stringify({
      revalidated: true,
      paths: pathList,
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
