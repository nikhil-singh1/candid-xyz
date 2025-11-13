import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// --- MODIFIED: Use getCase and getCases ---
import { getCase, getCases } from "../utils/api";

// --- MODIFIED: Renamed component ---
export default function CaseView() {
  const { slug } = useParams();
  const [post, setPost] = useState(null); // 'post' variable is fine, or rename to 'caseItem'
  const [otherPosts, setOtherPosts] = useState([]); // 'otherPosts' is fine, or rename to 'otherCases'

  useEffect(() => {
    // --- MODIFIED: Use getCase and getCases ---
    getCase(slug).then(setPost);
    getCases().then(setOtherPosts);
  }, [slug]);

  if (!post) return <p className="p-6">Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div
        className="relative h-[250px] md:h-[600px] w-full bg-cover bg-center "
        style={{ backgroundImage: `url(${post.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to from-black/70 to-transparent  flex items-center justify-center p-[14%] md:p-[12%]">
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-10">
          <div className="flex items-center gap-4 text-gray-600 text-sm md:text-xl">
            {/* You can update this logic if you store author name */}
            <span>👤 Candid Team</span>
            <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          {post.sections.map((section, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row gap-6 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {section.image && (
                <>
                  <img
                    src={section.image}
                    alt="Section"
                    className="w-full md:w-[350px] h-[210px] md:h-[290px] object-fit rounded-lg shadow-lg"
                  />
                </>
              )}

             <div
                className="prose prose-lg max-w-none items-center text-justify"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:col-span-1">
          {/* --- MODIFIED: Title --- */}
          <h2 className="text-xl font-bold">Read More Case Studies</h2>
          {otherPosts
            .filter((ob) => ob.slug !== post.slug)
            .map((ob) => (
              <div
              key={ob._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                {ob.heroImage && (
                  <img
                    src={ob.heroImage}
                    alt={ob.title}
                    className="h-40 w-full object-fit"
              />
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{ob.title}</h3>
                    {/* --- MODIFIED: Link to /case-study/slug --- */}
                  <Link
                    to={`/case-study/${ob.slug}`}
                    className="text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 rounded-lg inline-block mt-3"
                  >
                    Read More →
                  </Link>
           </div>
              </div>
            ))}
        </aside>
      </div>
    </div>
  );
}
