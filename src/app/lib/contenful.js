import { createClient } from "contentful";

export const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//fetch posts
export const fetchEntries = async (type) => {
    const entries = await client.getEntries(type);
    if (entries.items) return entries.items;
    return null
};
