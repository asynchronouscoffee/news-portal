"use client"

import { Article } from "@/types/news"
import { useEffect, useState } from 'react';
import fetchNews from "@/lib/fetchNews"

const BlogList = () => {
    const [blog, setBlog] = useState<Article[]>([]);
    const [category, setCategory] = useState<string>("");
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews(search);
            setBlog(data);
        }

        getNews()
    }, [search])

    console.log(blog);
    return (
        <div>Yow!</div>
    )
}

export default BlogList