import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormHolbie = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<Formik
				initialValues={{
					name: '',
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
					if(!valores.name){
						errores.name = 'Please enter your full name'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)){
						errores.name = 'The name can only contain letters and spaces'
					}

					if(!valores.gender){
						errores.gender = 'Please enter your gender'
					}

					if(!valores.about_me){
						errores.about_me = 'Please fill this field'
					}

					if(!valores.location){
						errores.location = 'Please fill this field'
					}

					if(!valores.strengths){
						errores.strengths = 'Please fill this field'
					}

					if(!valores.most_amazing){
						errores.most_amazing = 'Please fill this field'
					}

					if(!valores.skills){
						errores.skills = 'Please fill this field'
					}

					if(!valores.technologies){
						errores.technologies = 'Please fill this field'
					}

					if(!valores.industries){
						errores.industries = 'Please fill this field'
					}

					if(!valores.experience){
						errores.experience = 'Please fill this field'
					}

					if(!valores.previous_studies){
						errores.previous_studies = 'Please fill this field'
					}

					if(!valores.projects){
						errores.projects = 'Please fill this field'
					}

					if(!valores.capstone_project){
						errores.capstone_project = 'Please fill this field'
					}

					if(!valores.linkedin){
						errores.linkedin = 'Please fill this field'
					}

					if(!valores.github){
						errores.github = 'Please fill this field'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Form sent');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
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
							<label htmlFor="gender">Gender<br /><br />
								<Field type="radio" name="gender" value="male" /> Male
							</label>
							<label>
								<Field type="radio" name="gender" value="female" /> Female
							</label>
							<label>
								<Field type="radio" name="gender" value="Prefer no to say" /> Prefer no to say
							</label>
							<label>
								<Field type="radio" name="gender" value="other" /> Other
								<div>
									<Field name="other" placeholder="" />
								</div>
							</label>
						</div>

						<div>
							<label htmlFor="about_me">About me</label>
							<Field
								type="about_me"
								id="about_me"
								name="about_me"
								as="textarea"
								placeholder="About me"
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
							<label htmlFor="strengths">Strengths</label>
							<Field
								type="strengths"
								id="strengths"
								name="strengths"
								as="textarea"
								placeholder="Low-level programming, python..."
							/>
						</div>

						<div>
							<label htmlFor="most_amazing">The most amazing thing</label>
							<Field
								type="most_amazing"
								id="most_amazing"
								name="most_amazing"
								as="textarea"
								placeholder="The most amazing thing I did was..."
							/>
						</div>

						<div>
							<label htmlFor="skills">Skills</label>
							<Field
								type="skills"
								id="skills"
								name="skills"
								as="textarea"
								placeholder="Virtual memory, heap and stack, relational DataBase"
							/>
						</div>

						<div>
							<label htmlFor="technologies">Technologies</label>
							<Field
								type="technologies"
								id="technologies"
								name="technologies"
								as="textarea"
								placeholder="Python, JavaScript, Jenkins, WebLogic"
							/>
						</div>

						<div>
							<label htmlFor="industries">Industries</label>
							<Field
								type="industries"
								id="industries"
								name="industries"
								as="textarea"
								placeholder="Publishing, Retail, FrontEnd Developer"
							/>
						</div>

						<div>
							<label htmlFor="experience">Experience</label>
							<Field
								type="experience"
								id="experience"
								name="experience"
								as="textarea"
								placeholder="FrontEnd Developer at Microsoft (follow by your functions)"
							/>
						</div>

						<div>
							<label htmlFor="previous_studies">Previous studies</label>
							<Field
								type="previous_studies"
								id="previous_studies"
								name="previous_studies"
								as="textarea"
								placeholder="Mechatronic Engineering, Golang..."
							/>
						</div>

						<div>
							<label htmlFor="projects">Projects</label>
							<Field
								type="projects"
								id="projects"
								name="projects"
								as="textarea"
								placeholder="Printf function, The shell..."
							/>
						</div>

						<div>
							<label htmlFor="capstone_project">Capstone Project</label>
							<Field
								type="capstone_project"
								id="capstone_project"
								name="capstone_project"
								placeholder="Smart Chat Bot"
							/>
						</div>

						<div>
							<label htmlFor="linkedin">LinkedIn</label>
							<Field
								type="linkedin"
								id="linkedin"
								name="linkedin"
								placeholder="https://www.linkedin.com/in/john-doe"
							/>
						</div>

						<div>
							<label htmlFor="github">GitHub</label>
							<Field
								type="github"
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
		</>
	);
}
export default FormHolbie;