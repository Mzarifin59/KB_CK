'use server'

import { revalidatePath, revalidateTag } from "next/cache";


export async function TagRevalidate() {
    revalidateTag('articles')
}
