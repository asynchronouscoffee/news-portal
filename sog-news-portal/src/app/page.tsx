'use server'

import Image from "next/image";
import Banner from "@/components/Banner"
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import NewsCard from "@/components/NewsCard";
import { Article } from "@/types/news";
import NewsLetter from "@/components/NewsLetter";

const API_KEY = 'ccfa6bfdd29840389fb857ed1fce5bf2';
const endpoint = `https://newsapi.org/v2/everything?q=indonesia&apiKey=${API_KEY}`;

export default async function Home() {
  // fetch(endpoint)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data.articles);
  //   })
  //   .catch(err => console.error('Error:', err));
  const res = await fetch(endpoint, { cache: "no-store" }); // for server-side fetching
  const data = await res.json();
  const articles = data.articles || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Banner />
      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Kabar Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justfy-between">
          {/* <LatestNews articles={articles} /> */}
          {
            articles.slice(0, 3).map((item: Article) =>(
              <NewsCard key={item.url} item={item} />
            ))

          }
        </div>
      </div>

      <NewsLetter />
    </div>

    
  );
}

