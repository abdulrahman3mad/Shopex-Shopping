import React, { memo } from "react";

function BrandsSE({ data }) {
	return (
		<section className="brands section-spacing">
			<div className="container">
				<div className="d-flex justify-content-around flex-wrap">
					{data
						? data.map((ele) => {
								return <img src={ele.img} alt={ele.alt} key={ele.id} />;
						  })
						: null}
				</div>
			</div>
		</section>
	);
}

export default memo(BrandsSE);
