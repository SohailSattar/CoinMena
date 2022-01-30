import { FC, useState } from "react";
import { Button, Dropdown, TextBox } from "..";
import { useStore } from "../../utils/store";
import { Asset } from "../../utils/types";
import CurrencyItem from "../CurrencyItem";
import { DropdownOption } from "../Dropdown";

import styles from "./styles.module.scss";

interface Props {
	assetsList: Asset[];
}

const CurrencyConverter: FC<Props> = ({ assetsList }) => {
	const [isFromReadOnly, setIsFromReadOnly] = useState(false);
	const [isToReadOnly, setIsToReadOnly] = useState(true);

	const currencyFrom = useStore((state) => state.currencyFrom);
	const setCurrencyFrom = useStore((state) => state.setCurrencyFrom);

	const currencyTo = useStore((state) => state.currencyTo);
	const setCurrencyTo = useStore((state) => state.setCurrencyTo);

	const [isSwapped, setIsSwapped] = useState(false);

	const currencyDropdown: DropdownOption[] = assetsList.map((asset) => ({
		value: asset.symbol,
		label: <CurrencyItem name={asset.name} symbol={asset.symbol} />,
	}));

	const [selectedCurrency, setSelectedCurrency] = useState<DropdownOption>(
		currencyDropdown[0]!
	);

	const convertCurrency = (
		baseCurrency: string,
		quotedCurrency: string,
		amount: number
	) => {
		fetch(
			`https://api.exchangerate.host/latest?base=${baseCurrency}&amount=${amount}&symbols=${quotedCurrency}`
		)
			.then((res) => res.json())
			.then((data) => {
				const rate = parseFloat(data.rates[quotedCurrency]);

				if (rate) {
					if (!isSwapped) {
						setCurrencyTo({
							...currencyTo,
							amount: rate,
						});
					} else {
						setCurrencyFrom({
							...currencyFrom,
							amount: rate,
						});
					}
				}
			})
			.catch((e) => {
				console.warn(`Fetch 1 error: ${e.message}`);
			});
	};

	const toggleSwapHandler = () => {
		setIsSwapped(!isSwapped);

		if (isSwapped) {
			setIsFromReadOnly(false);
			setIsToReadOnly(true);
		} else {
			setIsFromReadOnly(true);
			setIsToReadOnly(false);
		}
	};

	const currencySelectHandler = (dropdownOption: DropdownOption) => {
		setSelectedCurrency(dropdownOption);
		if (!isSwapped) {
			setCurrencyFrom({
				...currencyFrom,
				name: dropdownOption.value.toString(),
			});

			convertCurrency(
				dropdownOption.value.toString(),
				currencyTo.name,
				currencyFrom.amount
			);
		} else {
			setCurrencyFrom({
				...currencyFrom,
				name: dropdownOption.value.toString(),
			});

			convertCurrency(
				currencyTo.name,
				dropdownOption.value.toString(),
				currencyTo.amount
			);
		}
	};

	const fromAmountTextChangeHandler = (event: any) => {
		setCurrencyFrom({
			...currencyFrom,
			amount: parseFloat(event.target.value),
		});

		if (!isSwapped) {
			convertCurrency(
				currencyFrom.name,
				currencyTo.name,
				parseFloat(event.target.value)
			);
		} else {
			convertCurrency(
				currencyTo.name,
				currencyFrom.name,
				parseFloat(event.target.value)
			);
		}
	};

	const toAmountTextChangeHandler = (event: { target: { value: any } }) => {
		setCurrencyTo({ ...currencyTo, amount: parseFloat(event.target.value) });

		convertCurrency(
			currencyTo.name,
			currencyFrom.name,
			parseFloat(event.target.value)
		);
	};

	return (
		<div className={styles.converter}>
			<div className={isSwapped ? styles.swapped : styles.container}>
				<div className={styles.panel}>
					<div className={styles.textBox}>
						<TextBox
							type="number"
							value={currencyFrom?.amount?.toString()}
							onChange={fromAmountTextChangeHandler}
							hasBorder={false}
							step={"0.00001"}
							isReadOnly={isFromReadOnly}
						/>
					</div>
					<div className={styles.currencySelection}>
						<Dropdown
							options={currencyDropdown}
							hasBorder={false}
							onSelect={currencySelectHandler}
							value={selectedCurrency}
						/>
					</div>
				</div>

				<div className={styles.panel}>
					<div className={styles.textBox}>
						<TextBox
							type="number"
							value={currencyTo?.amount.toString()}
							onChange={toAmountTextChangeHandler}
							hasBorder={false}
							step={"0.00001"}
							isReadOnly={isToReadOnly}
						/>
					</div>
					<div className={styles.fiat}>
						<span>USD</span>
					</div>
				</div>
			</div>
			<div>
				<Button className={styles.button} onClick={toggleSwapHandler}>
					Swap
				</Button>
			</div>
		</div>
	);
};

export default CurrencyConverter;
