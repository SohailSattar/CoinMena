import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
	type: "text" | "password";
	placeholder?: string;
	value: string;
	onChange: (event: any) => void;
}

const TextBox: FC<Props> = ({ type, placeholder, value, onChange }) => {
	const textChangeHandler = (event: any) => {
		onChange(event);
	};

	return (
		<input
			type={type}
			className={styles.textBox}
			placeholder={placeholder}
			value={value}
			onChange={textChangeHandler}
		/>
	);
};

export default TextBox;
