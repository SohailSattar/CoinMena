import { FC } from "react";
import Button from "../Button";
import TextBox from "../TextBox";

interface Props {
	onLogin: (isLogin: boolean) => void;
}

const LoginForm: FC<Props> = ({ onLogin }) => {
	const loginClickHandler = () => {
		onLogin(true);
	};

	return (
		<div>
			<TextBox
				type="text"
				value={""}
				onChange={function (event: any): void {
					// throw new Error("Function not implemented.");
				}}
			/>{" "}
			<TextBox
				type="text"
				value={""}
				onChange={function (event: any): void {
					// throw new Error("Function not implemented.");
				}}
			/>
			<Button onClick={loginClickHandler}>Log In</Button>
		</div>
	);
};

export default LoginForm;
