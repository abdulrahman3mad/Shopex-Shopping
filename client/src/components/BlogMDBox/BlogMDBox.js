function BlogMDBox() {
    return (
        <div className="mk-instructions border p-3">
            <h4 className="h6 mb-4">How to use markdown</h4>
            <div className="block mb-2 border-bottom">
                <p className="fw-bold">Headers</p>
                <ul>
                    <li># 1st Header</li>
                    <li>## 2nd Header</li>
                    <li>...</li>
                    <li>####### 6th Header</li>
                </ul>
            </div>


            <div className="block mb-2 border-bottom">
                <p className="fw-bold">Generals</p>
                <ul >
                    <li className="d-flex justify-content-between mb-3">
                        **bold**
                        <li className="fw-bold">bold</li>
                    </li>

                    <li className="d-flex justify-content-between mb-3">
                        *italic*
                        <li><i>italic</i></li>
                    </li>

                    <li className="d-flex justify-content-between mb-3">
                        * Item 1
                        <ul>
                            <li></li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default BlogMDBox