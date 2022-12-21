import React, { useRef } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { PageHeading, Button } from "../../components";
import emailjs from "@emailjs/browser";
function Contact() {
	const form = useRef();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		emailjs
			.sendForm(
				"service_1564la5",
				"template_vhbopcn",
				form.current,
				"t4WhBwP2qHD-awjeR"
			)
			.then(
				(result) => {
					event.target.reset();
					event.target[0].focus();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<PageHeading heading={"Contact Us"} pages={["Home", "Contact Us"]} />
			<section className="contact section-spacing">
				<div className="container">
					<div className="row in-touch_top mb-5">
						{/* Information about us */}
						<div className="col-xl-6 col-lg-6 col-md-12 left">
							<h2 className="text-clr-heading fw-bold fs-1 mb-4">
								Information About us
							</h2>
							<p className="custom-muted-contact">
								Consectetur aliquet a erat per sem nisi leo placerat dui a
								adipiscing a sagittis vestibulum. Sagittis posuere id nam quis
								vestibulum faucibus a est tristique ridiculus sed.posuere id nam
								quis vestibu
							</p>
							{/* Facebook & twitter & instagram  */}
							<div className="social">
								<a
									href="https://www.facebook.com/"
									className="bg-clr-primary fbook text-white rounded-circle"
								>
									<FaFacebookF />
								</a>
								<a
									href="https://twitter.com/"
									className="bg-clr-accent text-white twitter rounded-circle"
								>
									<FaTwitter />
								</a>
								<a
									href="https://www.instagram.com/"
									className="insta text-white rounded-circle"
								>
									<FaInstagram />
								</a>
							</div>
						</div>
						{/* Contact way */}
						<div className="col-xl-6 col-lg-6 col-md-12 right">
							<h2 className="text-clr-heading fw-bold fs-1 mb-4">
								Contact Way
							</h2>
							<div className="row">
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colum">
									<img src="images/Contact/mail.png" alt="Mail img" />
									<div className="data">
										<p className="custom-muted-contact">Tel: 877-45-44-33</p>
										<p className="custom-muted-contact">
											E-Mail: shop@store.uk
										</p>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colum">
									<img src="images/Contact/call-center.png" alt="support img" />
									<div className="data">
										<p className="custom-muted-contact">Support forum</p>
										<p className="custom-muted-contact">for over 24h</p>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colum">
									<img src="images/Contact/location.png" alt="support img" />
									<div className="data">
										<p className="custom-muted-contact">
											20 Margaret St, London
										</p>
										<p className="custom-muted-contact">
											Great Britain, 3NM98-LK
										</p>
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 colum">
									<img src="images/Contact/van.png " alt=" support img" />
									<div className="data">
										<p className="custom-muted-contact">
											Free standard shipping
										</p>
										<p className="custom-muted-contact">on all orders.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Form & image */}
					<div className="row in-touch__bottom pt-4">
						{/* Left Colum */}
						<div className="col-xl-6 col-lg-6 col-md-12 left">
							<div className="row main-row">
								<h2 className="text-clr-heading fw-bold fs-1 mb-4">
									Get In Touch
								</h2>
								<p className="custom-muted-contact mb-4">
									Please get in touch and our expert support team will answer
									all your questions. <br />
									lf you have any questions or queries a member of staff will
									always be happy to help.
								</p>
								<form
									action="#"
									ref={form}
									onSubmit={(e) => onSubmitHandler(e)}
								>
									<div className="row">
										{/* Name input */}
										<div className="col-xl-6 col-lg-6 col-md-12 mb-4">
											<input
												type="text"
												placeholder="Your Name*"
												required
												className="rounded-1 w-100"
												name="name"
											/>
										</div>
										{/* Email input */}
										<div className="col-xl-6 col-lg-6 col-md-12 mb-4">
											<input
												type="email"
												name="From_email"
												placeholder="Your Email*"
												required
												className="rounded-1 w-100"
											/>
										</div>
										{/* Subject input */}
										<div className="col-xl-12 mb-4">
											<input
												type="text"
												placeholder="Subject*"
												required
												className="rounded-1 w-100"
												name="subject"
											/>
										</div>
										{/* Textarea */}
										<div className="col-xl-12 mb-4">
											<textarea
												className="w-100 rounded-1"
												name="message"
												placeholder="Type Your Message*"
												rows="10"
												required
											></textarea>
										</div>
										{/* Send mail */}
										<div className="col-lg-6 mb-4">
											<Button val={"Send Mail"} />
										</div>
									</div>
								</form>
							</div>
						</div>
						{/* Right Colum */}
						<div className="col-xl-6 col-lg-6 col-md-12 d-none d-lg-block">
							<div className="img-ctn h-100 d-flex justify-content-center flex-column">
								<img
									src="/images/Contact/ilastration.png"
									alt="Contact us design"
									className="w-100"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact;
