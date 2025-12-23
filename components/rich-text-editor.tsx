// "use client"

// import { useEditor, EditorContent } from "@tiptap/react"
// // import StarterKit from "@tiptap/starter-kit"
// // import Placeholder from "@tiptap/extension-placeholder"
// import { Bold, Italic, List, ListOrdered, Heading2, Quote } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"

// interface RichTextEditorProps {
//   content: string
//   onChange: (content: string) => void
//   placeholder?: string
// }

// export function RichTextEditor({ content, onChange, placeholder = "Write your story..." }: RichTextEditorProps) {
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       Placeholder.configure({
//         placeholder,
//       }),
//     ],
//     content,
//     onUpdate: ({ editor }) => {
//       onChange(editor.getHTML())
//     },
//     editorProps: {
//       attributes: {
//         class:
//           "prose prose-lg max-w-none focus:outline-none min-h-[400px] px-4 py-6 text-foreground [&_h1]:text-4xl [&_h1]:font-serif [&_h1]:font-bold [&_h2]:text-3xl [&_h2]:font-serif [&_h2]:font-bold [&_p]:leading-relaxed [&_p]:mb-4",
//       },
//     },
//   })

//   if (!editor) {
//     return null
//   }

//   return (
//     <div className="border border-border rounded-lg overflow-hidden bg-white">
//       {/* Toolbar */}
//       <div className="border-b border-border p-2 flex items-center gap-1 flex-wrap bg-muted/30">
//         <Button
//           type="button"
//           variant={editor.isActive("bold") ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBold().run()}
//         >
//           <Bold className="h-4 w-4" />
//         </Button>
//         <Button
//           type="button"
//           variant={editor.isActive("italic") ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleItalic().run()}
//         >
//           <Italic className="h-4 w-4" />
//         </Button>
//         <Separator orientation="vertical" className="h-6" />
//         <Button
//           type="button"
//           variant={editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
//         >
//           <Heading2 className="h-4 w-4" />
//         </Button>
//         <Separator orientation="vertical" className="h-6" />
//         <Button
//           type="button"
//           variant={editor.isActive("bulletList") ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBulletList().run()}
//         >
//           <List className="h-4 w-4" />
//         </Button>
//         <Button
//           type="button"
//           variant={editor.isActive("orderedList") ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}
//         >
//           <ListOrdered className="h-4 w-4" />
//         </Button>
//         <Separator orientation="vertical" className="h-6" />
//         <Button
//           type="button"
//           variant={editor.isActive("blockquote") ? "secondary" : "ghost"}
//           size="sm"
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}
//         >
//           <Quote className="h-4 w-4" />
//         </Button>
//       </div>

//       {/* Editor Content */}
//       <EditorContent editor={editor} />
//     </div>
//   )
// }
