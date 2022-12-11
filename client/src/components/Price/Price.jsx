import React from "react";

function Price({ val, className }) {
	return (
		<div className="price">
			<h5 className={className}>${val}</h5>
		</div>
	);
}

export default Price;
