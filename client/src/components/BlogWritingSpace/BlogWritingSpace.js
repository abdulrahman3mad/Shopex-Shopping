function BlogWritingSpace({ content, onChange }) {
    return (
        <textarea value={content} onChange={(e) => onChange(e.target.value)} className="p-3 border fs-5">
           
        </textarea>
    )
}

export default BlogWritingSpace