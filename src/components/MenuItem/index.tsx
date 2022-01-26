import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

interface Props {
	name: string;
	path: string;
}

const MenuItem: FC<Props> = ({ name, path }) => {
	return (
		<li className={styles.menuItem}>
			<Link className={styles.item} to={path}>
				<span>{name}</span>
			</Link>
		</li>
	);
};

export default MenuItem;
