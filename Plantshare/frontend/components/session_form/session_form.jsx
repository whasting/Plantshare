import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

	// renderErrors() {
	// 	return(
	// 		<ul>
	// 			{this.props.errors.map((error, i) => (
	// 				<li key={`error-${i}`}>
	// 					{error}
	// 				</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	render() {
		return (
			<div className="login-form-container">

				<form onSubmit={this.handleSubmit} className="login-form-box">
					<div className="login-header">
						<h3>Welcome to Plant Share!</h3>
						<br/>
						<h4>Please {this.props.formType} or <span>{this.navLink()}</span> instead</h4>
					</div>

					<div className="login-form">

						<input type="text"
							value={this.state.username}
							placeholder="Username"
							onChange={this.update("username")}
							className="login-input" />

						<input type="password"
							value={this.state.password}
							placeholder="Password"
							onChange={this.update("password")}
							className="login-input" />

					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
