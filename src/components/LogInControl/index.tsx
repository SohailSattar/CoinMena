import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "..";
import { useStore } from "../../utils/store";
import LoginForm from "../LoginForm";

import styles from "./styles.module.scss";

const LoginControl = () => {
	const navigate = useNavigate();

	const isLoggedIn = useStore((state) => state.loggedIn);
	const setUserLoggedIn = useStore((state) => state.setUserLoggedIn);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalCloseHandler = () => {
		setIsModalOpen(false);
	};

	const loginButtonClickHandler = () => {
		setIsModalOpen(true);
	};

	const loginHandler = () => {
		setIsModalOpen(false);
		setUserLoggedIn(true);
	};

	const logoutHandler = () => {
		setUserLoggedIn(false);
		navigate("/");
	};

	return (
		<div className={styles.loginControl}>
			{isLoggedIn ? (
				<div className={styles.loggedInUserContainer}>
					<span className={styles.loggedInUser}>Sohail Abdul Sattar</span>
					<div>
						<Button onClick={logoutHandler}>Logout</Button>
					</div>
				</div>
			) : (
				<Button onClick={loginButtonClickHandler}>Login</Button>
			)}
			<Modal
				title="Log in"
				isOpen={isModalOpen}
				className={styles.modal}
				onClose={modalCloseHandler}
			>
				<LoginForm onLogin={loginHandler} />
			</Modal>
		</div>
	);
};

export default LoginControl;
