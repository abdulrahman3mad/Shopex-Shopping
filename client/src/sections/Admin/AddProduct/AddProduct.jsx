import React, { memo, useEffect } from "react";
import { useState } from "react";
import { ImImages } from "react-icons/im";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import { insertProduct } from "../../../redux-toolkit/features/addProductSlice";

function AddProduct() {
	const maxNumber = 4;
	let name = "";
	const [isFinished, setIsFinished] = useState(false);
	const dispatch = useDispatch();
	const [images, setImages] = useState([]);
	const [formData, setFormData] = useState({
		title: "",
		price: "",
		discount: "",
		description: "",
		category: "",
		brand: "",
		img: "",
		alt: "",
		subImages: [],
	});

	if (isFinished) {
		dispatch(insertProduct(formData));
		setIsFinished(false);
	}

	const onChangeHandler = (e) => {
		name = e.target.name;
		let value =
			name === "price" || name === "discount"
				? +e.target.value
				: e.target.value;
		setFormData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
		event.target.reset();
		let state = [];
		if (images.length) {
			for (let i = 0; i < images.length; i++) {
				state.push({ img: images[i].data_url, alt: images[i].file.name });
			}
			setFormData((prev) => {
				return {
					...prev,
					img: images[0].data_url,
					alt: images[0].file.name,
					subImages: state,
				};
			});
			setIsFinished(true);
			setImages([]);
		}
	};
	/*
	Library React-images-uploading
	*/
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		setImages(imageList);
	};
	return (
		<section className="addProduct">
			<div className="container">
				<h2 className="fw-semibold mb-5">Add Product</h2>
				<hr />
				<form
					action="#"
					onSubmit={(e) => {
						onSubmitHandler(e);
					}}
				>
					<div className="row">
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="pe-4 mb-4 mb-sm-0">
								{/* Product Name */}
								<label htmlFor="proName" className="d-block mb-2">
									Product Name
								</label>
								<input
									id="proName"
									type="text"
									className="w-100 lightBorder mb-2 customPadding customBorder"
									placeholder="Arm Wooden Chair"
									maxLength={20}
									required
									name="title"
									onChange={(e) => {
										onChangeHandler(e);
									}}
								/>
								<p className="text-muted custom-under-line">
									Do not exceed 20 characters when enter the product name.
								</p>
								{/* Category */}
								<label htmlFor="proCategory" className="d-block mb-2">
									Category
								</label>
								<select
									name="category"
									id="proCategory"
									className="lightBorder w-100 customPadding customBorder mb-4"
									required
									onChange={(e) => {
										onChangeHandler(e);
									}}
								>
									<option value="Chair">Chair</option>
									<option value="Sofa">Sofa</option>
									<option value="Arm_Chair">Arm Chair</option>
									<option value="LWC_Chair">LWC Chair</option>
								</select>
								{/* Brand */}
								<label htmlFor="proBrand" className="d-block mb-2">
									Brand
								</label>
								<select
									name="brand"
									id="proBrand"
									className="lightBorder w-100 customPadding customBorder mb-4"
									required
									onChange={(e) => {
										onChangeHandler(e);
									}}
								>
									<option value="IKA">IKA</option>
									<option value="EGT">EGT</option>
									<option value="ZTR">ZTR</option>
									<option value="WFO">WFO</option>
								</select>
								{/* Description */}
								<label htmlFor="proDescription" className="d-block mb-2">
									Description
								</label>
								<textarea
									name="description"
									id="proDescription"
									className="w-100 customBorder p-3 fs-4 mb-2"
									rows="9"
									maxLength={100}
									required
									onChange={(e) => {
										onChangeHandler(e);
									}}
								/>
								<p className="text-muted custom-under-line position-relative">
									Do not exceed 100 characters when entering the product
									description.
								</p>
							</div>
						</div>
						<div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
							<div className="ps-4 ">
								{/* Price & Discount */}
								<label htmlFor="Price" className="d-block mb-2">
									Price & Discount
								</label>
								<div className="d-flex align-items-center gap-3 mb-4">
									<input
										name="price"
										id="Price"
										type="number"
										placeholder="50.00"
										className="customBorder customPadding w-50"
										required
										onChange={(e) => {
											onChangeHandler(e);
										}}
									/>
									<input
										name="discount"
										type="number"
										placeholder="20.00"
										className="customBorder customPadding w-50"
										onChange={(e) => {
											onChangeHandler(e);
										}}
									/>
								</div>
								<label htmlFor="proImages" className="d-block mb-2 mt-2">
									Product Images
								</label>
								{/* React-images-uploader Product Images  */}
								<ImageUploading
									multiple
									value={images}
									onChange={onChange}
									maxNumber={maxNumber}
									dataURLKey="data_url"
								>
									{({
										imageList,
										onImageUpload,
										onImageRemoveAll,
										onImageUpdate,
										onImageRemove,
										isDragging,
										dragProps,
										errors,
									}) => (
										// building UI
										<div className="upload__image-wrapper">
											<button
												style={isDragging ? { borderColor: "blue" } : undefined}
												type="button"
												onClick={onImageUpload}
												{...dragProps}
												className={"upload-Area bg-transparent w-100 mb-4"}
											>
												<ImImages className="mt-3 mb-3 w-100" />
												<p className="text-muted">
													<small className="fs-5">
														Select{" "}
														<span className="text-primary">
															click to browse
														</span>
													</small>
												</p>
											</button>
											{/* Validation Handler */}
											{errors && (
												<div>
													{errors.maxNumber && (
														<span>
															Number of selected images exceed maxNumber
														</span>
													)}
													{errors.acceptType && (
														<span>Your selected file type is not allow</span>
													)}
													{errors.maxFileSize && (
														<span>Selected file size exceed maxFileSize</span>
													)}
													{errors.resolution && (
														<span>
															Selected file is not match your desired resolution
														</span>
													)}
												</div>
											)}
											{/* Here render all images uploaded.*/}
											{imageList.length ? (
												<>
													<div className="row mt-2">
														{imageList.map((image, index) => (
															<div
																key={index}
																className="image-item p-2 col-6 rounded-3"
															>
																<div className="card d-flex align-items-center pt-3 pb-3">
																	<img
																		src={image["data_url"]}
																		alt=""
																		width="100"
																		className="mb-2"
																	/>
																	<div className="image-item__btn-wrapper">
																		<button
																			onClick={() => onImageUpdate(index)}
																			className="btn btn-primary me-2"
																		>
																			Update
																		</button>
																		<button
																			onClick={() => onImageRemove(index)}
																			className="btn btn-danger ms-2"
																		>
																			Remove
																		</button>
																	</div>
																</div>
															</div>
														))}
													</div>
													<div className="text-center mt-3">
														<button
															onClick={onImageRemoveAll}
															className={"btn btn-danger"}
														>
															Remove all images
														</button>
													</div>
												</>
											) : null}
											<hr />
											<p className="text-muted ">
												You need to add at least 4 images. Pay attention to the
												quality of the pictures you add, comply with the
												background color standards. Picture must be in certain
												dimensions. Notice that the product shows all the
												details
											</p>
										</div>
									)}
								</ImageUploading>
							</div>
						</div>
					</div>
					<div className="controllers text-center">
						<button
							className="btn btn-outline-primary ps-4 pe-4 fs-3"
							type="submit"
						>
							Add Product
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default memo(AddProduct);
