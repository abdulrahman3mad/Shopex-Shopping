import FeaProCard from "../../components/FeaturedProCard/FeaProCard"

function ProductsList({ products, start, end }) {


    const productsCards = products.slice(start, end).map((product) => {
        return (
            <div className="col-lg-3 col-md-6 col-12" key={product.id}>
                <FeaProCard
                    product= {product}
                    classNames="shadow-0 circled"
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