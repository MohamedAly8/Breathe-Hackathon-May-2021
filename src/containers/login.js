
import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
	const { loggedIn, login, logout } = props;

	const button = () => {
		let button;
		if (loggedIn) {
			button = (
                <div> logout button </div>
			);
		} else {
			button = (
                <div> login button </div>
			);
		}
        return button;
	};

	return <div className="container">{button()}</div>;
};

const sToP = (state) => ({
	loggedIn: state.user.loggedIn
});

const dToP = (dispatch) => ({
	login: (userData) =>
		dispatch({
			type: 'LOGIN',
			payload: userData
		}),
    logout: () =>
    dispatch({
        type: 'LOGOUT',
    }),
});

export default connect(sToP, dToP)(Login);
