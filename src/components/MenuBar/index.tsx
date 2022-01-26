import { FC } from "react";
import MenuItem from "../MenuItem";

import styles from "./styles.module.scss";

interface Props {
	menuItems: { name: string; path: string }[];
}

const MenuBar: FC<Props> = ({ menuItems }) => {
	return (
		<div className={styles.menuBar}>
			<nav>
				<ul>
					{menuItems.map((item, index) => (
						<MenuItem key={index} name={item.name} path={item.path} />
					))}
				</ul>
			</nav>
		</div>
	);
};

export default MenuBar;
