import ReactMarkdown from 'https://esm.sh/react-markdown@7'

function AddBlogView({ content }) {
    return (
        <div className='p-3 border viewArea'>
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default AddBlogView