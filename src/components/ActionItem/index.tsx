import { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
	title: string;
	onClick: (action: any) => void;
}

const ActionItem: FC<Props> = ({ title, onClick }) => {
	return (
		<div className={styles.actionItem} onClick={onClick}>
			{title}
		</div>
	);
};

export default ActionItem;
