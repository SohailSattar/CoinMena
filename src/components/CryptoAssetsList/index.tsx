import { FC } from "react";
import { Asset } from "../../utils/types";
import Button from "../Button";
import ButtonWithDropdown from "../ButtonWithDropdown";
import CurrencyItem from "../CurrencyItem";
import Table, { TableColumn } from "../Table";

import styles from "./styles.module.scss";

interface Props {
	assets: Asset[];
}

const CryptoAssetsList: FC<Props> = ({ assets }) => {
	const columns: TableColumn[] = [
		{ Header: "Coin Name", accessor: "colName" },
		{ Header: "Price in USD", accessor: "colPrice" },
		{ Header: "", accessor: "colAction" },
	];

	const buyClickHandler = (event: any) => {
		alert("Asset Bought");
	};

	const sellClickHandler = (event: any) => {
		alert("Asset Sold");
	};

	const rows = assets.map((asset) => ({
		colName: (
			<CurrencyItem
				name={asset.name}
				symbol={asset.symbol}
				className={styles.rowItem}
			/>
		),
		colPrice: <div className={styles.rowItem}>{asset.amountInUSD}</div>,
		colAction: (
			<div className={styles.rowItem}>
				<ButtonWithDropdown
					title="Action"
					options={[
						{ name: "Buy", onClick: buyClickHandler },
						{ name: "Sell", onClick: sellClickHandler },
					]}
				/>
			</div>
		),
	}));

	return (
		<div className={styles.assetList}>
			<Button onClick={() => {}}>Load More</Button>
			<Table columnsList={columns} rowList={rows} />
		</div>
	);
};

export default CryptoAssetsList;
