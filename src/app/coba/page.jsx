import { getAllCategories } from "@/app/fetch/res";
import Link from "next/link";

export default async function Coba(){
    const category = await getAllCategories();
    return(
        <>
        {category.map((categories) => (
            <>
            <Link href={`/coba/${categories.slug}`}>
                <h1>{categories.text}</h1>
            </Link>
            </>
        ))}
        </>
    )
}