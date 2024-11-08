'use client';

import { getCategoryDynamic } from "@/app/fetch/res";

export default async function Coba({params}){
    const category = await getCategoryDynamic(params.slug);
    return(
        <>
        {category.map((categories) => (
            <>
            <h1>{categories.text}</h1>
            <p>{categories.ChildCategories.text}</p>
            </>
        ))}
        </>
    )
}