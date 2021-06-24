import React ,{ useState } from "react";
import "./Contuct.scss";
import emailjs from 'emailjs-com';

const Contuct = () => {

	const [firstName , setFirstName] = useState('');
	const [lastName , setLastName] = useState('');
	const [email , setEmail] = useState('');
	const [phone , setPhone] = useState('');
	const [msg , setMsg] = useState('');
	const [reject , setReject] = useState(null);
	const [successSnd , setSuccessSnd] = useState(null);


const handelFirstName = (e) => {
	setFirstName(e.target.value)
}

const handelLastName = (e) => {
	setLastName(e.target.value)
}

const handelEmail = (e) => {
	setEmail(e.target.value)
}

const handelPhone = (e) => {
	setPhone(e.target.value)
}

const handelMsg = (e) =>{
	setMsg(e.target.value)
}

const clearFeilds = () => {
	setFirstName("")
	setLastName("")
	setEmail("")
	setPhone("")
	setMsg("")
}



	const sendEmail = (e) => {
		e.preventDefault();

		if(!reject){
			emailjs.sendForm('service_tz0l27s', 'template_5p4fv0a', e.target, 'user_98Zb9q5gn95pgq2PmRTRT')
				.then((result) => {
					console.log(result.text);
					setSuccessSnd(true)
					clearFeilds()
					handelSuccessSnd()
					setReject(null)
				}, (error) => {
				  console.log(error.text);
				});

		}
	}


const handelCheckMsg = () =>{
	msg.length < 5 ? setReject(true) : setReject(false)
}

const handelSuccessSnd = () => {

	setTimeout(function(){ setSuccessSnd(false) }, 3000);
}

  return (
	<div className="BxContact">
		<main id="BxContact">
		    <h1  className="text-uppercase lg-heading">
		      Contact
		      <span className="text-sec">Me!!</span>
		    </h1>

		    <h2 className="sm-heading">
		      I Will See Your Message On My Email...
		    </h2>

			<form  onSubmit={sendEmail} className="contuctForm">
				<div className="container">
					<div className="form-row">

						<div className="col-sm-12 col-md-6 mb-3">
							<label htmlFor="validationServer01">First name</label>
							<input type="text" className="form-control " value={firstName} onChange={handelFirstName} id="validationServer01" name="name" required />
						</div>

						<div className="col-sm-12 col-md-6 mb-3">
							<label htmlFor="validationServer02">Last name</label>
							<input type="text" className="form-control "  value={lastName} onChange={handelLastName} id="validationServer02" name="name" required />
							<div className="valid-feedback">
							Looks good!
							</div>
						</div>

						<div className="col-sm-12 col-md-6 mb-3">
							<label htmlFor="validationServer01">Email</label>
							<input type="email" className="form-control "  value={email} onChange={handelEmail} id="validationServer01" name="email" required />
						</div>

						<div className="col-sm-12 col-md-6 mb-3">
							<label htmlFor="validationServer01">Phone</label>
							<input type="number" className="form-control "  value={phone} onChange={handelPhone} id="validationServer01" name="Subject" required />
						</div>

						<div className="col-md-12 mb-3">
							<label htmlFor="validationServer01">Your Message</label>
							<textarea className={`form-control ${reject ? "is-invalid" : reject == null ? "" : "is-valid"}`}  value={msg} onBlur={handelCheckMsg} onChange={handelMsg} id="validationServer01" name="message" required></textarea>
							{reject && (
						        <div className="invalid-feedback">
						          {reject && "Sorry Message Should Be More Than 5 Character!!"}
						        </div>
							)}
						</div>
					</div>

					<button className="btn btn-warning" type="submit">Submit form</button>
				</div>
			</form>
			<div className={`success-snd ${successSnd ? "show" : !successSnd ? "hide" : " "} `}>
				<h3>Your message was successfully sent!!!</h3>
			</div>
		</main>
		<footer className="social-footer">
			<ul className="container">
				<li>
					<a href="https://www.facebook.com/mohmad.ail.5/" rel="noreferrer" target="_blank" >
						<i className="fab fa-facebook"></i>
					</a>
				</li>

				<li>
					<a href="https://github.com/Mohmad012" rel="noreferrer" target="_blank" >
						<i className="fab fa-github"></i>
					</a>
				</li>

				<li>
					<a href="https://www.linkedin.com/in/mohmad-gamal-196943168/" rel="noreferrer" target="_blank" >
						<i className="fab fa-linkedin-in"></i>
					</a>
				</li>
			</ul>
		</footer>
	</div>
  );
}

export default Contuct;
