import React from "react";
import LinkComp from "../../components/Link/LinkComp";

function NewsletterSE() {
	return (
		<section className="newsletter section-spacing text-center">
			<div className="container">
				<h2 className="fw-bold text-clr-heading mb-4">
					Get Leatest Update By Subscribe <br /> Our Newsletter
				</h2>
				<LinkComp className={""} to={"/signup"} val={"Sign Up"} />
			</div>
		</section>
	);
}

export default NewsletterSE;
