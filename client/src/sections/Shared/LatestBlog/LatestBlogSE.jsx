import React from "react";
import {LatBlogCard} from "components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLatestBlogData } from "redux-toolkit/features/latestBlogSlice";

function LatestBlogSE() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.latestBlog);
	useEffect(() => {
		dispatch(getLatestBlogData());
	}, [dispatch]);

	const latestBlogUI = () => {
		return state.data
			? state.data.map((ele) => {
					return (
						<LatBlogCard
							key={ele.id}
							to={ele.to}
							img={ele.img}
							alt={ele.alt}
							authorName={ele.authorName}
							authorImg={ele.authorImg}
							authorAlt={ele.authorAlt}
							time={ele.time}
							title={ele.title}
							description={ele.description}
						/>
					);
			  })
			: null;
	};

	return (
		<section className="latest-blog section-spacing">
			<div className="container">
				<h2 className="text-clr-heading fs-1 fw-bold text-center mb-5">
					Latest Blog
				</h2>
				<div className="row">{latestBlogUI()}</div>
			</div>
		</section>
	);
}

export default LatestBlogSE;
