import React, { Fragment } from "react";
import { HiOutlineMail } from "react-icons/hi";

function Mail() {
	return (
		<Fragment>
			<a
				href="mailto:Shopex@gmail.com"
				className="mail-ctn  algin-items-center text-white"
			>
				<HiOutlineMail className="icon mail-icon" />
				<span>Shopex@gmail.com</span>
			</a>
		</Fragment>
	);
}

export default Mail;
