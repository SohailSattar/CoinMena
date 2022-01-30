import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
	type: "text" | "password" | "number";
	placeholder?: string;
	value?: string;
	onChange: (event: any) => void;
	hasBorder?: boolean;
	step?: string;
	isReadOnly?: boolean;
}

const TextBox: FC<Props> = ({
	type,
	placeholder,
	value,
	onChange,
	hasBorder = true,
	step,
	isReadOnly = false,
}) => {
	const textChangeHandler = (event: any) => {
		onChange(event);
	};

	return (
		<input
			type={type}
			className={clsx(styles.textBox, hasBorder && styles.inputBorder)}
			placeholder={placeholder}
			value={value}
			onChange={textChangeHandler}
			step={step}
			readOnly={isReadOnly}
		/>
	);
};

export default TextBox;
