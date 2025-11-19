import React, { useState } from "react";
import { createPost, uploadImages } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Upload, Image as ImageIcon, PlusCircle, Loader2 } from "lucide-react";
import TiptapEditor from "../components/TiptapEditor"; // Import your new Tiptap component
import BackButton from "../components/BackButton";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState(null);
  const [heroPreview, setHeroPreview] = useState(null);
  const [sections, setSections] = useState([{ text: "", image: null, preview: null }]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSectionChange = (idx, field, value) => {
    const updated = [...sections];
    updated[idx][field] = value;
    setSections(updated);
  };

  const handleSectionImage = (idx, file) => {
    const updated = [...sections];
    updated[idx].image = file;
    updated[idx].preview = URL.createObjectURL(file);
    setSections(updated);
  };

  const addSection = () => {
    setSections([...sections, { text: "", image: null, preview: null }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Logic for uploading images and creating post remains the same...
      const filesToUpload = [];
      if (heroImage) filesToUpload.push(heroImage);
      sections.forEach(sec => {
        if (sec.image) filesToUpload.push(sec.image);
      });

      let uploadedUrls = [];
      if (filesToUpload.length > 0) {
        const res = await uploadImages(filesToUpload);
        uploadedUrls = res.urls;
      }

      let urlIndex = 0;
      let heroUrl = "";
      if (heroImage) {
        heroUrl = uploadedUrls[urlIndex++];
      }

      const sectionData = sections.map(sec => {
        let imageUrl = "";
        if (sec.image) {
          imageUrl = uploadedUrls[urlIndex++];
        }
        // Tiptap might return empty content as "<p></p>", clean it up if empty.
        const cleanedText = sec.text === '<p></p>' ? '' : sec.text;
        return { text: cleanedText, image: imageUrl };
      });

      const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, '');
      const postData = { title, slug, heroImage: heroUrl, sections: sectionData };

      const post = await createPost(postData);

      if (post._id) {
        navigate("/");
      } else {
        alert(post.msg || "Failed to create post");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
       <BackButton />
      <h1 className="text-3xl font-bold mb-6 text-gray-800">✍️ Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Enter post title..."
            className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Hero Image Upload */}
        <div>
          <p className="font-semibold mb-2 text-gray-700">Hero Image</p>
          <label htmlFor="hero-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl p-6 cursor-pointer hover:border-teal-500 hover:bg-gray-50 transition">
            <Upload className="h-10 w-10 text-gray-500 mb-2" />
            <p className="text-gray-600">Click to upload or drag & drop</p>
            <input
              id="hero-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setHeroImage(file);
                  setHeroPreview(URL.createObjectURL(file));
                }
              }}
            />
          </label>
          {heroPreview && (
            <div className="mt-4">
              <img src={heroPreview} alt="Hero Preview" className="w-full max-h-64 object-cover rounded-xl shadow-md"/>
            </div>
          )}
        </div>

        {/* Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Sections</h2>
          {sections.map((sec, idx) => (
            <div key={idx} className="p-5 border rounded-xl bg-white shadow-sm space-y-4 mb-6">
              {/* Replace ReactQuill with the new TiptapEditor component */}
              <TiptapEditor
                value={sec.text}
                onChange={(content) => handleSectionChange(idx, "text", content)}
                placeholder="Write your amazing content here..."
              />
              <label htmlFor={`section-upload-${idx}`} className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-4 cursor-pointer hover:border-teal-500 hover:bg-gray-50 transition">
                <ImageIcon className="h-8 w-8 text-gray-500 mb-2" />
                <p className="text-gray-600 text-sm">Upload section image</p>
                <input
                  id={`section-upload-${idx}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) handleSectionImage(idx, file);
                  }}
                />
              </label>
              {sec.preview && (
                <img src={sec.preview} alt="Section Preview" className="w-full max-h-56 object-cover rounded-lg shadow" />
              )}
            </div>
          ))}
          <button type="button" onClick={addSection} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
            <PlusCircle className="h-5 w-5 text-teal-600" />
            Add Section
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow-md transition disabled:bg-teal-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Publishing...
              </>
            ) : (
              "🚀 Publish Post"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}