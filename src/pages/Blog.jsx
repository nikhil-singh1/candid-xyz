import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../utils/api";
import { Calendar } from "lucide-react"; // Optional: for icons

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then(setPosts)
      .catch(err => console.error("Failed to fetch posts:", err))
      .finally(() => setLoading(false));
  }, []);

  // This function is updated to strip HTML tags before creating the excerpt.
  const createExcerpt = (sections) => {
    if (!sections || sections.length === 0 || !sections[0].text) {
      return "No content available.";
    }

    const htmlContent = sections[0].text;

    // Use the browser's built-in tools to safely convert HTML to plain text
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const plainText = tempDiv.textContent || tempDiv.innerText || "";

    // Now, create the excerpt from the clean plain text
    if (plainText.length > 100) {
      return plainText.substring(0, 100) + "...";
    }
    return plainText;
  };
 

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* --- Hero Section --- */}
      <div
        className="relative h-[250px] md:h-96 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-primary-dark)] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <div className="text-sm md:text-xl font-light mb-2">
            Latest Insights 
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold px-4">
           ARTICLES & STORIES
          </h1>
        </div>
      </div>

      {/* --- Latest Posts Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Latest Posts
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                to={`/post/${post.slug}`}
                key={post._id}
                className="bg-white rounded-xl shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Post Image */}
                <div className="h-40 md:h-56 w-full overflow-hidden">
                  <img
                    src={post.heroImage || 'https://via.placeholder.com/400x300'}
                    alt={post.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-teal-600">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {createExcerpt(post.sections)}
                  </p>
                  
                  <span className="font-semibold text-teal-600 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!loading && posts.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No posts found.</p>
        )}
      </div>
    </div>
  );

}





