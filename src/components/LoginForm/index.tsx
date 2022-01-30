import { FC, useState } from "react";
import Button from "../Button";
import TextBox from "../TextBox";

import styles from "./styles.module.scss";

interface Props {
	onLogin: (isLogin: boolean) => void;
}

const LoginForm: FC<Props> = ({ onLogin }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const loginClickHandler = () => {
		onLogin(true);
	};

	return (
		<div className={styles.loginForm}>
			<div className={styles.textField}>
				<TextBox
					type="text"
					value={email}
					placeholder="Email Address"
					onChange={(event) => setEmail(event.target.value)}
				/>
			</div>
			<div className={styles.textField}>
				<TextBox
					type="password"
					value={password}
					placeholder="Password"
					onChange={(event) => setPassword(event.target.value)}
				/>
			</div>
			<div className={styles.buttonField}>
				<Button onClick={loginClickHandler} className={styles.button}>
					Log In
				</Button>
			</div>
		</div>
	);
};

export default LoginForm;
