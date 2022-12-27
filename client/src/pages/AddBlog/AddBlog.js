import { Input } from 'components';
import AddBlogView from 'components/AddBlogView/AddBlogView';
import BlogMDBox from 'components/BlogMDBox/BlogMDBox';
import BlogWritingSpace from 'components/BlogWritingSpace/BlogWritingSpace';
import { useState } from 'react';

function AddBlog() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [blogViewState, SetblogViewState] = useState(false);

    return (
        <main className='section-spacing'>
            <div className='container'>
                <div className='input-container pb-3'>
                    <label htmlFor='title' className='d-block fs-3 ff-primary'>Title</label>
                    <input value={title} className="border border-2 py-1 px-3" name={title} id={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>

                <div className='blog-writing-view mt-5'>
                    <ul className='d-flex gap-2'>
                        <li className='pointer accent-clr-hover' onClick={(e) => SetblogViewState(false)}>Edit</li>
                        <li className='pointer accent-clr-hover' onClick={(e) => SetblogViewState(true)}>Display</li>
                    </ul>
                    <div className='row'>
                        <div className='col-lg-8'>
                            {
                                blogViewState ? <AddBlogView content={content} /> : <BlogWritingSpace content={content} onChange={setContent} />
                            }
                        </div>
                        <div className='col-lg-4'>
                            <BlogMDBox />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddBlog