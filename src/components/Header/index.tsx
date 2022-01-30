import { FC } from "react";
import { Link } from "react-router-dom";
import { LoginControl, MenuBar } from "..";

import styles from "./styles.module.scss";

interface Props {
	title: string;
	menuItems: { name: string; path: string }[];
}

const Header: FC<Props> = ({ title, menuItems }) => {
	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<div className={styles.container}>
					<Link to={"/"} className={styles.logoText}>
						{title}
					</Link>

					<div className={styles.mainMenu}>
						<div className={styles.container}>
							<MenuBar menuItems={menuItems} />
						</div>
					</div>
					<div className={styles.buttons}>
						{/* <Button onClick={loginButtonHandler}>Login</Button> */}
						<LoginControl />
					</div>
				</div>
			</div>
			{/* <h1>{title}</h1>
			 */}
		</header>
	);
};

export default Header;
