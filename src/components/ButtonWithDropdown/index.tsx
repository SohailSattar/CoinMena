import { FC } from "react";
import ActionItem from "../ActionItem";
import Button from "../Button";

import styles from "./styles.module.scss";

export interface ButtonOption {
	name: string;
	onClick: (action: any) => void;
}

interface Props {
	title: string;
	options: ButtonOption[];
}

const ButtonWithDropdown: FC<Props> = ({ title, options }) => {
	return (
		<div className={styles.dropdown}>
			<Button className={styles.dropbtn}>{title}</Button>
			<div className={styles.dropdownContent}>
				{options.map((option, index) => (
					<ActionItem
						key={index}
						title={option.name}
						onClick={option.onClick}
					/>
				))}
			</div>
		</div>
	);
};

export default ButtonWithDropdown;
