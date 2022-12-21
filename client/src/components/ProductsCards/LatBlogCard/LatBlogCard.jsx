import React from "react";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
function LatBlogCard({
	img,
	alt,
	title,
	time,
	authorName,
	authorImg,
	authorAlt,
	to,
	description,
}) {
	return (
		<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
			<div className="card latBlogCard border-0 mb-0 mb-sm-4">
				<div className="card-img">
					<img src={img} className="card-img-top" alt={alt} />
				</div>
				<div className="card-body pb-5">
					<div className="publisher d-flex align-items-center mb-4">
						<div className="publisher-img me-2">
							<img src={authorImg} alt={authorAlt} />
						</div>
						<p className="name m-0">{authorName}</p>
						<div className="date d-flex align-items-center ms-4">
							<FcCalendar />
							<p className="mb-0 ms-2">{time}</p>
						</div>
					</div>
					<Link to={to} className="fs-7 fw-bold card-title ">
						{title}
					</Link>
					<p className="card-text mt-3">{description}</p>
					<Link to={to} className={"read-more text-decoration-underline"}>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LatBlogCard;
