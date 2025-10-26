import React, { useState, useEffect } from "react";
// --- MODIFIED: Use getCase and updateCase ---
import { getCase, updateCase, uploadImages } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { Upload, Image as ImageIcon, PlusCircle, Loader2 } from "lucide-react";
import TiptapEditor from "../components/TiptapEditor";

// --- MODIFIED: Renamed component ---
export default function EditCase() {
  const [post, setPost] = useState(null); // 'post' state is fine, it's just a variable name
  const [title, setTitle] = useState("");
  const [heroImage, setHeroImage] = useState(null); // For new file uploads
  const [heroPreview, setHeroPreview] = useState(""); // For existing or new preview
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { slug } = useParams();

  // 1. Fetch existing post data on component mount
  useEffect(() => {
    // --- MODIFIED: Use getCase ---
    getCase(slug).then(data => {
      setPost(data);
      setTitle(data.title);
      setSections(data.sections);
      setHeroPreview(data.heroImage); // Set existing image URL for preview
    }).catch(err => console.error("Failed to fetch case study:", err));
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

      // --- MODIFIED: Use updateCase ---
      await updateCase(post._id, postData);
      // --- MODIFIED: Navigate to /admin/cases ---
      navigate("/admin/cases"); // Go back to the case studies management page

    } catch (err) {
      console.error(err);
      alert("Failed to update case study.");
    } finally {
      setLoading(false);
    }
  };

  if (!post) return <p>Loading case study data...</p>;

  // JSX is nearly identical to NewPost.jsx, but values are populated from state
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* --- MODIFIED: Title --- */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">✍️ Edit Case Study</h1>
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
          {/* Your label logic is here */}
          <label htmlFor="hero-upload" className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50">
            <Upload className="text-gray-400" size={40} />
            <span className="mt-2 text-gray-500">Click to upload a hero image</span>
             <input
                id="hero-upload"
                type="file"
                className="hidden"
                  accept="image/*"
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
              <img src={heroPreview} alt="Preview" className="w-full rounded-lg object-cover"/>
            </div>
          )}
        </div>
        
        {/* Sections */}
        <div>
          {sections.map((sec, idx) => (
            <div key={idx} className="p-5 border rounded-xl shadow-sm bg-white mb-6">
              <p className="font-semibold mb-3 text-gray-700">Section {idx + 1}</p>
              <TiptapEditor
                value={sec.text}
                onChange={(content) => handleSectionChange(idx, "text", content)}
              />
              <div className="mt-4">
              <label htmlFor={`section-upload-${idx}`} className="flex items-center gap-2 text-sm text-blue-600 cursor-pointer hover:underline">
                  <ImageIcon size={16} />
                  <span>{sec.preview || sec.image ? "Change" : "Add"} section image</span>
                 <input
                    id={`section-upload-${idx}`}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) handleSectionImage(idx, file);
                    }}
                 />
               </label>
              </div>
              {/* Use section.preview for new images, section.image for existing */}
              {(sec.preview || sec.image) && (
                <div className="mt-4">
               <img src={sec.preview || sec.image} alt="Preview" className="w-1/2 rounded-lg object-cover"/>
                </div>
              )}
            </div>
          ))}
          <button 
            type="button" 
            onClick={addSection}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            <PlusCircle size={18} />
            Add Section
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button 
            type="submit" 
            disabled={loading} 
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Saving...
              </>
            ) : (
              '💾 Save Changes'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
