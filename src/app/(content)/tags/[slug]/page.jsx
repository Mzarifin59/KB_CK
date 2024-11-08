import TagContent from "@/components/tags/tag-content"; 
import { getArticleByTag } from "@/app/fetch/res";

export async function generateMetadata({ params }) {
  return {
    title: params.slug || 'Tag',
  };
}

export default async function TagsPage({ params }) {
  const initialData = await getArticleByTag(params.slug);
  return <TagContent initialData={initialData} slug={params.slug} />;
}
