import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';

const FormCompany = () => {
	const [image, setImage] = useState([])
	function formifyAndSend(data) {
		const formData = new FormData()
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value)
		}
		formData.append('files', image)
		Axios.post("http://localhost:5000/companies", formData).then((response) => {
			console.log(response)
		})
	}

	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (

		<>	<h1 className="text-center mt-5">Create your company profile</h1>
			<div className="container p-3">
				<Formik onSubmit={(values) => (console.log(values))}
					initialValues={{
						name: '',
						picture: '',
						technologies: '',
						about_us: '',
						location: '',
						contact_link: ''
					}}
					validate={(valores) => {
						let errores = {};

						// Validacion name
						if (!valores.name) {
							errores.name = 'Please enter your full name'
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
							errores.name = 'The name can only contain letters and spaces'
						}

						if (!valores.about_us) {
							errores.about_us = 'Please fill this field'
						}

						if (!valores.location) {
							errores.location = 'Please fill this field'
						}

						if (!valores.contact_link) {
							errores.contact_link = 'Please fill this field'
						}

						return errores;
					}}
					onSubmit={(valores, { resetForm }) => {
						resetForm();
						console.log('Form sent');
						console.log(image)
						formifyAndSend(valores)
						//console.log(valores)
						cambiarFormularioEnviado(true);
						setTimeout(() => cambiarFormularioEnviado(false), 5000);
					}}
				>
					{({ errors }) => (
						<Form className="formulario">
							<div>
								<label htmlFor="name">Full name</label>
								<Field
									type="text"
									id="name"
									name="name"
									placeholder="Techstars"
								/>
								<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
							</div>

							<div>
								<label htmlFor="picture">Upload your company picture</label>
								<input type="file" onChange={(e) => setImage(e.target.files[0])} />
								<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
							</div>

							<div>
								<label htmlFor="about_us">About us</label>
								<Field
									type="about_us"
									id="about_us"
									name="about_us"
									as="textarea"
									placeholder="About us"
								/>
							</div>

							<div>
								<label htmlFor="technologies">About us</label>
								<Field
									type="technologies"
									id="technologies"
									name="technologies"
									as="textarea"
									placeholder="Python, AWS, Ruby, C/C++..."
								/>
							</div>

							<div>
								<label htmlFor="location">Location</label>
								<Field
									type="location"
									id="location"
									name="location"
									placeholder="Medellín, Colombia"
								/>
							</div>

							<div>
								<label htmlFor="contact_link">Contact Link</label>
								<Field
									type="contact_link"
									id="contact_link"
									name="contact_link"
									placeholder="https://company.com/contact_us"
								/>
							</div>

							<button type="submit">Submit</button>
							{formularioEnviado && <p className="success">Form sent successfully!</p>}
							<br />
							<br />
							<br />
							<br />
							<br />
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
}
export default FormCompany;
