import clsx from "clsx";
import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
	symbol: string;
	name: string;
	className?: string;
}

const CurrencyItem: FC<Props> = ({ symbol, name, className }) => {
	return (
		<div className={clsx(styles.currencySelection, className)}>
			<img
				src={`assets/icons/crypto/${symbol}.svg`}
				alt=""
				className={styles.assetIcon}
			/>{" "}
			{name} {`(${symbol})`}
		</div>
	);
};

export default CurrencyItem;
