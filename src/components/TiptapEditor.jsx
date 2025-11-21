// import React, { useEffect } from 'react';
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { TiptapToolbar } from './TiptapToolbar';


// import Underline from '@tiptap/extension-underline';
// import Link from '@tiptap/extension-link';
// import Highlight from '@tiptap/extension-highlight';
// import TextAlign from '@tiptap/extension-text-align';

// // This is the main Tiptap editor component
// const TiptapEditor = ({ value, onChange, placeholder }) => {
//   const editor = useEditor({
//     extensions: [
//       StarterKit.configure({
//         heading: { levels: [1, 2, 3] },
//       }),
//       // --- FIX: Add the imported extensions to this array ---
//       Underline,
//       Highlight,
//       TextAlign.configure({
//         types: ['heading', 'paragraph'],
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//       }),
//     ],
//     content: value, // only used on mount
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML());
//     },
//     editorProps: {
//       attributes: {
//         class: "prose max-w-none p-4 border border-t-0 border-gray-300 rounded-b-lg min-h-[150px] focus:outline-none",
//       },
//     },
//   });

//   // ✅ Update editor when `value` changes externally
//   useEffect(() => {
//     if (editor && value !== editor.getHTML()) {
//       editor.commands.setContent(value, false);
//     }
//   }, [value, editor]);

//   return (
//     <div>
//       <TiptapToolbar editor={editor} />
//       <EditorContent editor={editor} placeholder={placeholder} />
//     </div>
//   );
// };

// export default TiptapEditor;




import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { TiptapToolbar } from './TiptapToolbar';

// Extension Imports
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';

const TiptapEditor = ({ value, onChange, placeholder }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        // Explicitly ensure lists are enabled
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Underline,
      Highlight,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
      }),
    ],
    content: value, // Set initial content on mount
    onUpdate: ({ editor }) => {
      // Return HTML whenever the content changes
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        // --- FIX EXPLAINED ---
        // Tailwind removes list styles by default. We use arbitrary variants to force them back:
        // [&_ol]:list-decimal -> Restore numbers for <ol>
        // [&_ul]:list-disc    -> Restore bullets for <ul>
        // [&_ol]:pl-5         -> Add padding left to <ol> so numbers are visible
        // [&_ul]:pl-5         -> Add padding left to <ul> so bullets are visible
        class: "prose max-w-none p-4 border border-t-0 border-gray-300 rounded-b-lg min-h-[150px] focus:outline-none [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-5 [&_ul]:pl-5",
      },
    },
  });

  // Update editor content if the `value` prop changes externally (e.g., from a database fetch)
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  return (
    <div className="w-full">
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} placeholder={placeholder} />
    </div>
  );
};

export default TiptapEditor;