import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';

const FormExperience = () => {
	const [image, setImage] = useState([])
	function formifyAndSend(data) {
		const formData = new FormData()
		for (const [key, value] of Object.entries(data)) {
			formData.append(key, value)
		}
		formData.append('files', image)
		Axios.post("http://localhost:5000/holbies", formData).then((response) => {
			console.log(response)
		})
	}

	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (

		<>	<h1 className="text-center mt-5">Tell us about your previous experience</h1>
			<div className="container p-3">
				<Formik onSubmit={(values) => (console.log(values))}
					initialValues={{
						name: '',
						description: '',
						company_name: ''
					}}
					validate={(valores) => {
						let errores = {};

						// Validacion name
						if (!valores.name) {
							errores.name = 'Please fill this field'
						}

						if (!valores.description) {
							errores.description = 'Please fill this field'
						}

						if (!valores.company_name) {
							errores.company_name = 'Please fill this field'
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
								<label htmlFor="name">Job title</label>
								<Field
									type="text"
									id="name"
									name="name"
									placeholder="Junior Backend Developer"
								/>
								<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
							</div>

							<div>
								<label htmlFor="description">Describe the functions you performed</label>
								<Field
									type="text"
									id="description"
									name="description"
									as="textarea"
									placeholder="description"
								/>
							</div>

							<div>
								<label htmlFor="company_name">Company Name</label>
								<Field
									type="text"
									id="company_name"
									name="company_name"
									placeholder="Microsoft"
								/>
							</div>

							<button type="submit">Submit</button>
							{formularioEnviado && <p className="success">Experience sent successfully!</p>}
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
export default FormExperience;
