export type Id = string | number;

export interface User {
	email: string;
	password: string;
}

export interface APIAsset {
	name: string;
	symbol: string;
	slug: string;
	metrics: { market_data: { price_usd: number } };
}

export interface Asset {
	name: string;
	symbol: string;
	slug: string;
	amountInUSD: number;
}

export interface Currency {
	name: string;
	amount: number;
}

export interface Rate {
	baseCurrency: string;
	quotedCurrency: string;
	rateAmount: number;
	// currencies: Currency[];
}
