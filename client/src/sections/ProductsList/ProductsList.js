import FeaProCard from "../../components/FeaturedProCard/FeaProCard"

function ProductsList({ products, start, end }) {
    const productsCards = products.slice(start, end).map((product, index) => {
        return (
            <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                <FeaProCard
                    classNames="shadow-0 circled"
                    title={`${product.title}`}
                    price={`${product.price}`}
                    oldPrice={`${product.oldprice}`}
                    img={`${product.img}`}
                />
            </div>
        )
    }) 

    return (
        <div className="products mt-5 pt-4">
            <div className="row">
                {productsCards}
            </div>
        </div>
    )
}

export default ProductsList