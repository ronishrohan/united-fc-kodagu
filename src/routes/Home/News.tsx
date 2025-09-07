import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "../../assets/images/image40.jpeg";
import { supabase } from "../../lib/supabase";
import { Link } from "react-router-dom";

const News = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching news items...");
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news")
        .select("*")
        .order("date_posted", { ascending: false })
        .limit(3);
      console.log("Fetched news items:", data);
      setNewsItems(data || []);
      setLoading(false);
    };
    fetchNews();
    console.log("News items fetched successfully");
  }, []);

  return (
    <div id="latest" className="h-fit px-[5vw] py-12 flex flex-col ">
      <div className="w-full flex justify-between mb-8">
        <div className="text-primary font-bold text-4xl flex items-center gap-4 text-center">
          Latest news{" "}
          <ArrowRight className="translate-y-1" size={40}></ArrowRight>
        </div>
      </div>
      <div className="h-fit items-stretch lg:min-h-[300px] md:min-h-[400px] w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
        {loading ? (
          <div className="col-span-3 flex items-stretch justify-center text-xl text-gray-500">
            Loading...
          </div>
        ) : (
          newsItems.map((item) => (
            <Link
              to={`/news/${item.id}`}
              key={item.id}
              className="w-full flex-1 flex flex-col h-full gap-0 group cursor-pointer"
            >
              <div className="h-[240px] w-full relative overflow-hidden shrink-0 ">
                <img
                  src={item.image_url || Image}
                  className="absolute size-full group-hover:scale-125 transition-all duration-700 ease-in-out object-cover"
                  alt={item.title}
                />
              </div>
              <div className="shrink-0 mt-4  w-full text-xl text-primary font-medium">
                {item.title}
              </div>
              <div className="shrink-0 mb-12 w-full text-lg text-zinc-800  font-medium overflow-hidden overflow-ellipsis whitespace-nowrap ">
                {item.content.slice(0, 100)}
              </div>
              <div className="w-full h-[2px] bg-zinc-300 mt-0 mb-4"></div>
              <div className="text-sm font-medium mt-auto  text-primary flex justify-between w-full">
                NEWS{" "}
                <span className="font-bold text-zinc-600">
                  {new Date(item.date_posted).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
             
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
