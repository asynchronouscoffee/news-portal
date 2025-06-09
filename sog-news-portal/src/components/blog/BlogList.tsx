"use client"

import { Article } from "@/types/news"
import { useEffect, useState } from 'react';
import fetchNews from "@/lib/fetchNews";
import SearchBar from "@/components/blog/SearchBar"
import NewsCard from "../NewsCard"

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
        <div className="">
            <div className="flex flex-col md:flex-row md:items-center md:gap-12 justify-between gap-4 mb-5">
                {/* Search bar */}
                <SearchBar onSearch = {setSearch} />
            </div>

            {/* Kabar Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justfy-between">
                {
                    blog.map((item: Article) => (
                        <NewsCard key={item?.url} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList