import React, { Fragment } from "react";
import { CiMail } from "react-icons/ci";

function Mail() {
	return (
		<Fragment>
			<a href="mailto:xyz@abc.com" className="mail-ctn  algin-items-center">
				<CiMail className="icon mail-icon" />
				<span>Hishamk1999@gmail.com</span>
			</a>
		</Fragment>
	);
}

export default Mail;
