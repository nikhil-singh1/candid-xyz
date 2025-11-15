// import React, { useState } from "react";
// // --- MODIFIED: Use createCase ---
// import { createCase, uploadImages } from "../utils/api";
// import { useNavigate } from "react-router-dom";
// import { Upload, Image as ImageIcon, PlusCircle, Loader2 } from "lucide-react";
// import TiptapEditor from "../components/TiptapEditor"; // Import your new Tiptap component

// // --- MODIFIED: Renamed component ---
// export default function NewCase() {
//   const [title, setTitle] = useState("");
//   const [heroImage, setHeroImage] = useState(null);
//   const [heroPreview, setHeroPreview] = useState(null);
//   const [sections, setSections] = useState([{ text: "", image: null, preview: null }]);
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleSectionChange = (idx, field, value) => {
//     const updated = [...sections];
//     updated[idx][field] = value;
//     setSections(updated);
//   };

//   const handleSectionImage = (idx, file) => {
//     const updated = [...sections];
//     updated[idx].image = file;
//     updated[idx].preview = URL.createObjectURL(file);
//     setSections(updated);
//   };

//   const addSection = () => {
//     setSections([...sections, { text: "", image: null, preview: null }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Logic for uploading images
//       const filesToUpload = [];
//       if (heroImage) filesToUpload.push(heroImage);
//       sections.forEach(sec => {
//         if (sec.image) filesToUpload.push(sec.image);
//       });

//       let uploadedUrls = [];
//       if (filesToUpload.length > 0) {
//         const res = await uploadImages(filesToUpload);
//         uploadedUrls = res.urls;
//       }

//       let urlIndex = 0;
//       let heroUrl = "";
//       if (heroImage) {
//         heroUrl = uploadedUrls[urlIndex++];
//       }

//       const sectionData = sections.map(sec => {
//         let imageUrl = "";
//         if (sec.image) {
//           imageUrl = uploadedUrls[urlIndex++];
//         }
//         // Tiptap might return empty content as "<p></p>", clean it up if empty.
//         const cleanedText = sec.text === '<p></p>' ? '' : sec.text;
//         return { text: cleanedText, image: imageUrl };
//       });

//       const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, '');
//    const postData = { title, slug, heroImage: heroUrl, sections: sectionData };

//       // --- MODIFIED: Use createCase ---
//       const post = await createCase(postData); // Changed from createPost

//       if (post._id) {
//         // --- MODIFIED: Navigate to /admin/cases ---
//         navigate("/"); // Changed from "/"
//       } else {
//         // --- MODIFIED: Update alert message ---
//         alert(post.msg || "Failed to create case study");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred. Check the console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       {/* --- MODIFIED: Title --- */}
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">✍️ Create New Case Study</h1>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Title */}
//         <div>
//           <input
//             type="text"
//             placeholder="Enter case study title..."
//             className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400" // Changed color
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         {/* Hero Image Upload */}
//         <div>
//           <p className="font-semibold mb-2 text-gray-700">Hero Image</p>
//           <label htmlFor="hero-upload" className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition">
//             <Upload className="h-10 w-10 text-gray-500 mb-2" />
//             <p className="text-gray-600">Click to upload or drag & drop</p>
//             <input
//               id="hero-upload"
//               type="file"
//           accept="image/*"
//               className="hidden"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//               if (file) {
//                   setHeroImage(file);
//                   setHeroPreview(URL.createObjectURL(file));
//                }
//               }}
//             />
//           </label>
//           {heroPreview && (
//             <div className="mt-4">
//               <img src={heroPreview} alt="Hero Preview" className="w-full max-h-64 object-cover rounded-xl shadow-md"/>
//             </div>
//           )}
//         </div>

//         {/* Sections */}
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Sections</h2>
//           {sections.map((sec, idx) => (
//             <div key={idx} className="p-5 border rounded-xl bg-white shadow-sm space-y-4 mb-6">
//               {/* Replace ReactQuill with the new TiptapEditor component */}
//               <TiptapEditor
//                 value={sec.text}
//                onChange={(content) => handleSectionChange(idx, "text", content)}
//                 placeholder="Write your amazing content here..."
//               />
//               <label htmlFor={`section-upload-${idx}`} className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition">
//                 <ImageIcon className="h-8 w-8 text-gray-500 mb-2" />
//                 <p className="text-gray-600 text-sm">Upload section image</p>
//                 <input
//                   id={`section-upload-${idx}`}
//                  type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                 if (file) handleSectionImage(idx, file);
//                  }}
//                 />
//               </label>
//              {sec.preview && (
//                 <img src={sec.preview} alt="Section Preview" className="w-full max-h-56 object-cover rounded-lg shadow" />
//               )}
//             </div>
//           ))}
//   <button type="button" onClick={addSection} className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
//             <PlusCircle className="h-5 w-5 text-blue-600" />
//           Add Section
//           </button>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={loading}
//             className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition disabled:bg-blue-400 disabled:cursor-not-allowed"
//        >
//             {loading ? (
//               <>
//               <Loader2 className="animate-spin mr-2" size={20} />
//                 Publishing...
//               </>
//           ) : (
//             // --- MODIFIED: Button text ---
//               "🚀 Publish Case Study"
//             )}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
// --- Keep your existing API util imports
import { createCase, uploadImages } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Upload, Image as ImageIcon, PlusCircle, Loader2 } from "lucide-react";
import TiptapEditor from "../components/TiptapEditor";

export default function NewCase() {
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

  // ---------------------------
  // Document upload handler
  // ---------------------------
  const handleDocUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Adjust base URL if needed (proxy or full URL)
      const res = await fetch("/api/parse-doc", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server error: ${errText}`);
      }

      const data = await res.json();
      // expected data: { title?: string, paragraphs: string[], images?: string[] }

      if (data.title) setTitle(prev => prev || data.title);

      // Convert parsed paragraphs + images into sections
      const parsed = (data.paragraphs || [])
        .filter(p => p && p.trim().length > 0)
        .map((p, i) => {
          return {
            text: `<p>${p.trim()}</p>`,
            image: null,
            preview: data.images?.[i] || null, // if backend returned image base64/data URLs
          };
        });

      // If no paragraphs found, create at least one empty section
      setSections(parsed.length > 0 ? parsed : [{ text: "", image: null, preview: null }]);
    } catch (err) {
      console.error("Document parsing failed:", err);
      alert("Failed to parse the document. Check console for details.");
    } finally {
      setLoading(false);
      // reset the input value so same-file uploads later will trigger change
      e.target.value = "";
    }
  };

  // ---------------------------
  // Submit (create case)
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Collect files to upload (hero + section images)
      const filesToUpload = [];
      if (heroImage) filesToUpload.push(heroImage);
      sections.forEach(sec => {
        if (sec.image) filesToUpload.push(sec.image);
      });

      let uploadedUrls = [];
      if (filesToUpload.length > 0) {
        const res = await uploadImages(filesToUpload);
        uploadedUrls = res.urls || [];
      }

      let urlIndex = 0;
      let heroUrl = "";
      if (heroImage) {
        heroUrl = uploadedUrls[urlIndex++] || "";
      }

      const sectionData = sections.map(sec => {
        let imageUrl = "";
        if (sec.image) {
          imageUrl = uploadedUrls[urlIndex++] || "";
        }
        const cleanedText = sec.text === "<p></p>" ? "" : sec.text;
        return { text: cleanedText, image: imageUrl };
      });

      const slug = title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
      const postData = { title, slug, heroImage: heroUrl, sections: sectionData };

      const post = await createCase(postData);

      if (post && post._id) {
        // navigate where you need (update if you want /admin/cases, etc.)
        navigate("/");
      } else {
        alert(post?.msg || "Failed to create case study");
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
      <h1 className="text-3xl font-bold mb-6 text-gray-800">✍️ Create New Case Study</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Enter case study title..."
            className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* -------------------------
            Document Upload (PDF/DOCX)
            Paste this ABOVE hero image as requested
           ------------------------- */}
        <div>
          <p className="font-semibold mb-2 text-gray-700">Upload PDF / DOCX to Auto-Generate Case Study</p>

          <label
            htmlFor="doc-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-purple-500 rounded-2xl p-6 cursor-pointer hover:bg-purple-50 transition"
          >
            <Upload className="h-10 w-10 text-purple-500 mb-2" />
            <p className="text-gray-600 text-sm">Click to upload a PDF or DOCX file</p>
          </label>

          <input
            id="doc-upload"
            type="file"
            accept=".pdf, .docx, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            onChange={handleDocUpload}
          />
        </div>

        {/* Hero Image Upload */}
        <div>
          <p className="font-semibold mb-2 text-gray-700">Hero Image</p>
          <label
            htmlFor="hero-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-2xl p-6 cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition"
          >
            <Upload className="h-10 w-10 text-gray-500 mb-2" />
            <p className="text-gray-600">Click to upload or drag & drop</p>
            <input
              id="hero-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setHeroImage(file);
                  setHeroPreview(URL.createObjectURL(file));
                }
              }}
            />
          </label>

          {heroPreview && (
            <div className="mt-4">
              <img src={heroPreview} alt="Hero Preview" className="w-full max-h-64 object-cover rounded-xl shadow-md" />
            </div>
          )}
        </div>

        {/* Sections */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Sections</h2>

          {sections.map((sec, idx) => (
            <div key={idx} className="p-5 border rounded-xl bg-white shadow-sm space-y-4 mb-6">
              <TiptapEditor
                value={sec.text}
                onChange={(content) => handleSectionChange(idx, "text", content)}
                placeholder="Write your amazing content here..."
              />

              <label
                htmlFor={`section-upload-${idx}`}
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:bg-gray-50 transition"
              >
                <ImageIcon className="h-8 w-8 text-gray-500 mb-2" />
                <p className="text-gray-600 text-sm">Upload section image</p>
                <input
                  id={`section-upload-${idx}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleSectionImage(idx, file);
                  }}
                />
              </label>

              {sec.preview && (
                <img src={sec.preview} alt="Section Preview" className="w-full max-h-56 object-cover rounded-lg shadow" />
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={addSection}
            className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <PlusCircle className="h-5 w-5 text-blue-600" />
            Add Section
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Publishing...
              </>
            ) : (
              "🚀 Publish Case Study"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
