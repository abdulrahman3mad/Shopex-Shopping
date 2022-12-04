import { TbPhoneCall } from "react-icons/tb";
import React, { Fragment } from "react";
function Telephone() {
	return (
		<Fragment>
			<a href="tel:+201011303410" className="tel-ctn  algin-items-center ms-4">
				<TbPhoneCall className="icon telephone-icon " />
				<span>(+20) 1011 3034 10</span>
			</a>
		</Fragment>
	);
}

export default Telephone;
