import CryptoAssetsList from "../../components/CryptoAssetsList";

import { useStore } from "../../utils/store";

import styles from "./styles.module.scss";

const HomePage = () => {
	const assets = useStore((state) => state.assets);

	return (
		<div className={styles.homePage}>
			<div className={styles.cryptoList}>
				<CryptoAssetsList assets={assets} />
			</div>
		</div>
	);
};

export default HomePage;
