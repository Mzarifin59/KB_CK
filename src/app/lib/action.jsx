'use server'

import { revalidatePath, revalidateTag } from "next/cache";

export async function CobaRevalidate(){
    revalidatePath('/(content)/informasi-umum', 'page')
}

export async function TagRevalidate() {
    revalidateTag('articles')
}
