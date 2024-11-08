{/* Fetch Categories */}

{/* Fetch Populate All Categories*/}
export async function getAllCategories() {
    const res = await fetch(process.env.BASE_URL_FETCH + '/categories?populate=*', {cache: "force-cache"});
    const data = await res.json();
    const category = data.data;

    return category;
}

{/* Fetch Data Produk At Home Page */}
export async function getHomeProduk(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/categories?filters[documentId][0]=nb34mangs&filters[documentId][1]=uydab242avgvd&filters[documentId][2]=mjctegtlz9638lwi0dywme9y&filters[documentId][3]=e2hbf4i830n5ipfq9jokd7rc&populate[IconImage][fields][0]=url&populate[IconImage][fields][1]=name', {cache: 'force-cache'});
    const data = await res.json();
    const produk = data.data;

    return produk;
}

{/* Fetch Data Portal At Home Page */}
export async function getHomePortal(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/categories?filters[documentId][0]=habsd68028adb&filters[documentId][1]=lys70sv9coi38e7wggftjclz&filters[documentId][2]=yausdb23939dba&filters[documentId][3]=yyn7bwn9o217vec2ah5i1fjn&populate[IconImage][fields][0]=url&populate[IconImage][fields][1]=name&sort[0]=documentId:asc', {cache: 'force-cache'});
    const data = await res.json();
    const portal = data.data;

    return portal;
}

{/* Fetch Categories with Query */}
export async function getCategories(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/categories?populate[IconImage][fields][0]=name&populate[IconImage][fields][1]=url&populate[articles][fields][0]=title&populate[articles][fields][1]=slug&populate[ChildCategories][fields][0]=text&populate[ChildCategories][fields][1]=slug&populate[ChildCategories][populate][articles][fields][0]=title&populate[ChildCategories][populate][articles][fields][1]=slug', {cache: "force-cache"});
    const data = await res.json();
    const category = data.data;

    return category;
}

{/* Fetch Data Category with  Dynamic */}
export async function getCategoryDynamic(slug){
    const res = await fetch(`${process.env.BASE_URL_FETCH}/categories?filters[slug][$eq]=${slug}&populate[IconImage][fields][0]=name&populate[IconImage][fields][1]=url&populate[articles][fields][0]=title&populate[articles][fields][1]=slug&populate[ChildCategories][fields][0]=text&populate[ChildCategories][fields][1]=slug&populate[ChildCategories][populate][articles][fields][0]=title&populate[ChildCategories][populate][articles][fields][1]=slug`, {cache: 'force-cache'});
    const data = await res.json();
    const categoryDetail = data.data;

    return categoryDetail;
}

{/* Fetch Categories for SideBar */}
export async function getSidebarCategory(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/categories?populate[IconImage][fields][0]=name&populate[IconImage][fields][1]=url&populate[articles][fields][0]=title&populate[articles][fields][1]=slug&populate[ChildCategories][fields][0]=text&populate[ChildCategories][fields][1]=slug&populate[ChildCategories][populate][articles][fields][0]=title&populate[ChildCategories][populate][articles][fields][1]=slug', {cache: 'force-cache'});
    const data = await res.json();
    const SidebarCategory = data.data;

    return SidebarCategory;
}
{/* --------------------------------------------------------------------------------------------------------- */}
{/* Fetch Articles */}

{/* Fetch Populate All Articles */}
export async function getAllArticles() {
    const res = await fetch(process.env.BASE_URL_FETCH + '/articles?populate=*', {cache: "force-cache"});
    const data = await res.json();
    const article = data.data;

    return article;
}

{/* Fetch Data Article's Infromasi Umum and Pagination With PagSize=7 */}
export async function getArticleInformasiUmum(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/articles?filters[category][text][$eq]=Informasi Umum&populate[category][fields][0]=text&populate[category][fields][1]=slug&pagination[page]=1&pagination[pageSize]=7', {cache: 'force-cache'});
    const data = await res.json();
    const information = data.data;

    return information;
}

{/* Fetch Articles That Category is Informasi Umum */}
export async function getAllInformasiUmum(page=1){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_FETCH;
    const res = await fetch(`${baseUrl}/articles?filters[category][text][$eq]=Informasi Umum&populate[category][fields][0]=text&populate[category][fields][1]=slug&pagination[page]=${page}&pagination[pageSize]=12`, {cache: 'force-cache'});
    const data = await res.json();
    
    return {
        articles: data.data,
        pagination: data.meta.pagination,
    }
}

{/* Fetch Articles with Filters By tag */}
export async function getArticleByTag(slug, page=1){
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_FETCH;
    const res = await fetch(`${baseUrl}/articles?filters[tags][slug][$eq]=${slug}&populate[tags][fields][0]=name&populate[tags][fields][1]=slug&pagination[page]=${page}&pagination[pageSize]=9`, {cache: 'force-cache'});
    const data = await res.json();
    
    return {
        articles: data.data,
        pagination: data.meta.pagination,
    }
}
{/* --------------------------------------------------------------------------------------------------------- */}
{/* Fetch FAQ */}

{/* Fetch Populate All FAQ */}
export async function getAllFaq(page=1) {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_FETCH;
        const res = await fetch(`${baseUrl}/faqs?pagination[page]=${page}&pagination[pageSize]=8`, {cache: 'force-cache'});
        const data = await res.json();
        
        return {
            articles: data.data,
            pagination: data.meta.pagination,
        }
}

{/* Fetch Faq with Pagination Page Size = 8 Dynamic */}
export async function getPaginationFaq(page) {
    const res = await fetch(`${process.env.BASE_URL_FETCH}/faqs?pagination[page]=${page}&pagination[pageSize]=8`, {cache: "force-cache"});
    const data = await res.json();
    const faqPag = data.data;

    return faqPag;
}
{/* --------------------------------------------------------------------------------------------------------- */}
{/* Fetch Tag */}

{/* Fetch Populate All Tag */}
export async function getAllTags() {
    const res = await fetch(process.env.BASE_URL_FETCH + '/tags?populate=*', {cache: "force-cache"});
    const data = await res.json();
    const tag = data.data;

    return tag;
}

{/* Fetch Tag wiyh Filters By Slug */}
export async function getTagBySlug(slug){
    const res = await fetch(`${process.env.BASE_URL_FETCH}/tags?populate=*&filters[slug][$eq]=${slug}`, {cache: 'force-cache'});
    const data = await res.json();
    const tagSlug = data.data;

    return tagSlug;
}
{/* --------------------------------------------------------------------------------------------------------- */}
{/* Fetch Global */}

{/* Fetch Populate All Global */}
export async function getAllGlobal(){
    const res = await fetch(process.env.BASE_URL_FETCH + '/global?populate[categories][populate]=*&populate[tags][populate]=*', {cache: 'force-cache'});
    const data = await res.json();
    const global = data.data;

    return global;
}
{/* --------------------------------------------------------------------------------------------------------- */}
