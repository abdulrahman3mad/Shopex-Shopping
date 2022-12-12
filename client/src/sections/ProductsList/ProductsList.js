import FeaProCard from "../../components/FeaturedProCard/FeaProCard"

function ProductsList({ products }) {
    const productsCards = products.map((product) => {
        return (
            <div className="col-lg-3" key={product.id}>
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