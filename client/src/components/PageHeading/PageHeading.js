function PageHeading({ heading, pages }) {
    const Pages = pages.map((page, index) => {
        return <a href="#" key={index} className={`page-link ${index == pages.length - 1 && "active"}`}>{page}</a>
    });

    return (
        <section className="page-heading bg-clr-primary-light">
            <div className="container">
                <h1 className="heading ff-primary fw-bold">{heading}</h1>
                <div className="d-flex">{Pages}</div>
            </div>
        </section>
    )
}

export default PageHeading