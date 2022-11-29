import React, { Fragment } from "react";
import { HiOutlineMail } from "react-icons/hi";

function Mail() {
	return (
		<Fragment>
			<a href="mailto:xyz@abc.com" className="mail-ctn  algin-items-center">
				<HiOutlineMail className="icon mail-icon" />
				<span>Hishamk1999@gmail.com</span>
			</a>
		</Fragment>
	);
}

export default Mail;
