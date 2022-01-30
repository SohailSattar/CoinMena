import { FC, Fragment } from "react";
import { Header, Footer } from "..";

import styles from "./styles.module.scss";

import menuItems from "../../assets/data/menuItems";
import { APIAsset } from "../../utils/types";
import { useQuery } from "react-query";
import { useStore } from "../../utils/store";

interface Props {
	children: any;
}

const Layout: FC<Props> = ({ children }) => {
	const setAssets = useStore((state) => state.setAssets);
	const isUserLoggedIn = useStore((state) => state.loggedIn);

	let menuList: { name: string; path: string }[] = [];

	if (isUserLoggedIn) {
		menuList = menuItems;
	} else {
		menuList = menuItems.filter((x) => x.isPublic !== isUserLoggedIn);
	}

	const compare = (valueA: APIAsset, valueB: APIAsset) => {
		if (valueA.symbol < valueB.symbol) {
			return -1;
		}
		if (valueA.symbol > valueB.symbol) {
			return 1;
		}
		return 0;
	};

	useQuery("currencyData", () =>
		fetch(
			"https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data/price_usd"
		)
			.then((res) => res.json())
			.then((data) =>
				setAssets(
					data.data
						.map((asset: APIAsset) => ({
							name: asset.name,
							symbol: asset.symbol,
							slug: asset.slug,
							amountInUSD: asset.metrics.market_data.price_usd,
						}))
						.sort(compare)
				)
			)
	);

	return (
		<Fragment>
			<Header title="CoinMena" menuItems={menuList} />
			<div className={styles.layout}>{children}</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
