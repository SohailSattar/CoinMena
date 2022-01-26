import { FC, Fragment } from "react";
import Header from "../Header";

import menuItems from "../../assets/data/menuItems";

import styles from "./styles.module.scss";

interface Props {
	children: any;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Header title="CoinMena" menuItems={menuItems} />
			<div className={styles.layout}>{children}</div>
		</Fragment>
	);
};

export default Layout;
