import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Axios from 'axios';

const FormHolbie = () => {
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

		<>	<h1 className="text-center mt-5">Create your holbie profile</h1>
			<div className="container p-3">
				<Formik onSubmit={(values) => (console.log(values))}
					initialValues={{
						name: '',
						picture: '',
						gender: '',
						about_me: '',
						location: '',
						strengths: '',
						most_amazing: '',
						skills: '',
						technologies: '',
						industries: '',
						experience: '',
						previous_studies: '',
						projects: '',
						capstone_project: '',
						linkedin: '',
						github: ''
					}}
					validate={(valores) => {
						let errores = {};

						// Validacion name
						if (!valores.name) {
							errores.name = 'Please enter your full name'
						} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
							errores.name = 'The name can only contain letters and spaces'
						}

						if (!valores.about_me) {
							errores.about_me = 'Please fill this field'
						}

						if (!valores.location) {
							errores.location = 'Please fill this field'
						}

						if (!valores.linkedin) {
							errores.linkedin = 'Please fill this field'
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
					validator={() => ({})}
				>
					{({ errors }) => (
						<Form className="formulario">
							<div>
								<label htmlFor="name">Full name</label>
								<Field
									type="text"
									id="name"
									name="name"
									placeholder="John Doe"
								/>
								<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
							</div>

							<div>
								<label htmlFor="picture">Upload your company picture</label>
								<input type="file" onChange={(e) => setImage(e.target.files[0])} />
								<ErrorMessage name="name" component={() => (<div className="error">{errors.name}</div>)} />
							</div>

							<div>
								<label htmlFor="gender">Gender</label>
								<Field
									type="text"
									id="gender"
									name="gender"
									as="textarea"
									placeholder="Male, Female, Prefer not to say..."
								/>
							</div>

							<div>
								<label htmlFor="about_me">About me</label>
								<Field
									type="text"
									id="about_me"
									name="about_me"
									as="textarea"
									placeholder="About me"
								/>
							</div>

							<div>
								<label htmlFor="location">Location</label>
								<Field
									type="text"
									id="location"
									name="location"
									placeholder="Medellín, Colombia"
								/>
							</div>

							<div>
								<label htmlFor="strengths">Strengths</label>
								<Field
									type="text"
									id="strengths"
									name="strengths"
									as="textarea"
									placeholder="Low-level programming, python..."
								/>
							</div>

							<div>
								<label htmlFor="most_amazing">The most amazing thing</label>
								<Field
									type="text"
									id="most_amazing"
									name="most_amazing"
									as="textarea"
									placeholder="The most amazing thing I did was..."
								/>
							</div>

							<div>
								<label htmlFor="skills">Skills</label>
								<Field
									type="text"
									id="skills"
									name="skills"
									as="textarea"
									placeholder="Virtual memory, heap and stack, relational DataBase"
								/>
							</div>

							<div>
								<label htmlFor="technologies">Technologies</label>
								<Field
									type="text"
									id="technologies"
									name="technologies"
									as="textarea"
									placeholder="Python, JavaScript, Jenkins, WebLogic"
								/>
							</div>

							<div>
								<label htmlFor="industries">Industries</label>
								<Field
									type="text"
									id="industries"
									name="industries"
									as="textarea"
									placeholder="Publishing, Retail, FrontEnd Developer"
								/>
							</div>

							<div>
								<label htmlFor="previous_studies">Previous studies</label>
								<Field
									type="text"
									id="previous_studies"
									name="previous_studies"
									as="textarea"
									placeholder="Mechatronic Engineering, Golang..."
								/>
							</div>


							<div>
								<label htmlFor="linkedin">LinkedIn</label>
								<Field
									type="text"
									id="linkedin"
									name="linkedin"
									placeholder="https://www.linkedin.com/in/john-doe"
								/>
							</div>

							<div>
								<label htmlFor="github">GitHub</label>
								<Field
									type="text"
									id="github"
									name="github"
									placeholder="https://github.com/JohnDoe"
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
export default FormHolbie;