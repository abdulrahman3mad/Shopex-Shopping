import React from "react";

function Loader() {
	return (
		<div className="Loader d-flex justify-content-center align-items-center">
			<div className="loading">
				<div className="loading-text">
					<span className="loading-text-words">L</span>
					<span className="loading-text-words">O</span>
					<span className="loading-text-words">A</span>
					<span className="loading-text-words">D</span>
					<span className="loading-text-words">I</span>
					<span className="loading-text-words">N</span>
					<span className="loading-text-words">G</span>
					<span className="loading-text-words">.</span>
					<span className="loading-text-words">.</span>
					<span className="loading-text-words">.</span>
				</div>
			</div>
		</div>
	);
}

export default Loader;
