import React, { FC } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	isPrimary?: boolean;
	children: string | React.ReactNode;
	className?: string;
	isround?: boolean;
	isGradient?: boolean;
}

const Button: FC<Props> = ({
	isPrimary,
	className,
	children,
	isround = false,
	isGradient = false,
	...buttonProps
}) => {
	const classes = clsx(
		styles.button,
		isPrimary && styles.primary,
		className,
		isround && styles.roundButton,
		isGradient && styles.gradiant
	);
	return (
		<button className={classes} {...buttonProps}>
			{children}
		</button>
	);
};

export default Button;
