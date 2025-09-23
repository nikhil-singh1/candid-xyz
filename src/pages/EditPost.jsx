import React, { useState, useEffect } from "react";
import { getPost, updatePost, uploadImages } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { Upload, Image as ImageIcon, PlusCircle, Loader2 } from "lucide-react";
import TiptapEditor from "../components/TiptapEditor";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState(null); // For new file uploads
  const [heroPreview, setHeroPreview] = useState(""); // For existing or new preview
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { slug } = useParams();

  // 1. Fetch existing post data on component mount
  useEffect(() => {
    getPost(slug).then(data => {
      setPost(data);
      setTitle(data.title);
      setSections(data.sections);
      setHeroPreview(data.heroImage); // Set existing image URL for preview
    }).catch(err => console.error(err));
  }, [slug]);

  const handleSectionChange = (idx, field, value) => {
    const updated = [...sections];
    updated[idx][field] = value;
    setSections(updated);
  };

  const handleSectionImage = (idx, file) => {
    const updated = [...sections];
    updated[idx].newImage = file; // Use 'newImage' to differentiate from existing url
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
      // --- Handle image uploads for new/changed images ---
      let heroUrl = post.heroImage; // Default to existing URL
      if (heroImage) { // If a new hero image was selected
        const res = await uploadImages([heroImage]);
        heroUrl = res.urls[0];
      }

      const sectionUploads = sections.map(sec => sec.newImage).filter(Boolean);
      let uploadedSectionUrls = [];
      if (sectionUploads.length > 0) {
        const res = await uploadImages(sectionUploads);
        uploadedSectionUrls = res.urls;
      }

      let urlIndex = 0;
      const finalSections = sections.map(sec => {
        if (sec.newImage) {
          return { text: sec.text, image: uploadedSectionUrls[urlIndex++] };
        }
        return { text: sec.text, image: sec.image }; // Keep existing image URL
      });

      // --- Prepare and submit updated data ---
      const postData = {
        title,
        heroImage: heroUrl,
        sections: finalSections,
      };

      await updatePost(post._id, postData);
      navigate("/admin/posts"); // Go back to the management page

    } catch (err) {
      console.error(err);
      alert("Failed to update post.");
    } finally {
      setLoading(false);
    }
  };

  if (!post) return <p>Loading post data...</p>;

  // JSX is nearly identical to NewPost.jsx, but values are populated from state
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">✍️ Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div>
          <input
            type="text"
            className="w-full p-3 border rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Hero Image */}
        <div>
          <p className="font-semibold mb-2">Hero Image</p>
          <label htmlFor="hero-upload" className="flex flex-col items-center ...">
             {/* ... same as NewPost ... */}
             <input
                id="hero-upload"
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setHeroImage(file); // Set new file object
                    setHeroPreview(URL.createObjectURL(file)); // Set new preview
                  }
                }}
             />
          </label>
          {heroPreview && (
            <div className="mt-4">
              <img src={heroPreview} alt="Preview" className="w-full ..."/>
            </div>
          )}
        </div>
        
        {/* Sections */}
        <div>
          {sections.map((sec, idx) => (
            <div key={idx} className="p-5 border ... mb-6">
              <TiptapEditor
                value={sec.text}
                onChange={(content) => handleSectionChange(idx, "text", content)}
              />
              <label htmlFor={`section-upload-${idx}`} className="...">
                {/* ... same as NewPost ... */}
                 <input
                    id={`section-upload-${idx}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) handleSectionImage(idx, file);
                    }}
                 />
              </label>
              {/* Use section.preview for new images, section.image for existing */}
              {(sec.preview || sec.image) && (
                <img src={sec.preview || sec.image} alt="Preview" className="w-full ..."/>
              )}
            </div>
          ))}
          <button type="button" onClick={addSection}>Add Section</button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" disabled={loading} className="flex ...">
            {loading ? 'Saving...' : '💾 Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}