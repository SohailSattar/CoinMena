import { useState } from "react";
import Modal from "react-modal";
import { Button } from "..";
import LoginForm from "../LoginForm";

import styles from "./styles.module.scss";

const LoginControl = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);

	//Modal
	const modalCloseHandler = () => {
		setModalOpen(false);
	};

	const loginButtonClickHandler = () => {
		// alert("I am going to log in");
		setModalOpen(true);
	};

	const onLoginHandler = () => {
		setModalOpen(false);
		setIsLoggedIn(true);
	};

	return (
		<div className={styles.loginControl}>
			{isLoggedIn ? (
				<span className={styles.loggedInUser}>Sohail Abdul Sattar</span>
			) : (
				<Button onClick={loginButtonClickHandler}>Login</Button>
			)}
			<Modal
				isOpen={modalOpen}
				// onAfterOpen={afterOpenModal}
				onRequestClose={modalCloseHandler}
				// style={customStyles}
				portalClassName={styles.modal}
				ariaHideApp={false}
			>
				<LoginForm onLogin={onLoginHandler} />
			</Modal>
		</div>
	);
};

export default LoginControl;
