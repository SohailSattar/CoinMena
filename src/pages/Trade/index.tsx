import CurrencyConverter from "../../components/CurrencyConverter";
import { useStore } from "../../utils/store";

import styles from "./styles.module.scss";

const TradePage = () => {
	const assets = useStore((state) => state.assets);

	return (
		<div className={styles.tradePage}>
			<div className={styles.currencyConverter}>
				<CurrencyConverter assetsList={assets} />
			</div>
		</div>
	);
};

export default TradePage;
