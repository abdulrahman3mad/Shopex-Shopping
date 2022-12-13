import React from "react";
import { Link } from "react-router-dom";

function FooterTab({ title, to, className }) {
	return (
		<Link to={to} className={`${className} d-block mb-3 footer-tab`}>
			{title}
		</Link>
	);
}

export default FooterTab;
