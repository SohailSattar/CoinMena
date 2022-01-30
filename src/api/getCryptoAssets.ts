export const getCryptoAssets = async () => {
	const result = await fetch(
		"https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data/price_usd"
	);
	return result.json();
};
