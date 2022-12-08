import React from "react";
import { Link } from "react-router-dom";

function LinkComp({ to, className, val }) {
	return (
		<>
			<Link
				to={to}
				className={`${className} btnLink btn text-white bg-clr-accent`}
			>
				{val}
			</Link>
		</>
	);
}

export default LinkComp;
