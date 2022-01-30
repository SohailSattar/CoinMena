import { Asset, Currency, User } from "./types";
import create from "zustand";

export const useStore = create((set: any) => ({
	//user
	user: { email: "", password: "" },
	setUser: (user: User) => set((state: any) => ({ ...state, user })),
	//user login
	loggedIn: false,
	setUserLoggedIn: (loggedIn: boolean) =>
		set((state: any) => ({ ...state, loggedIn })),
	//currencies
	assets: [],
	setAssets: (assets: Asset[]) => set((state: any) => ({ ...state, assets })),
	//currency exchange
	currencyFrom: { amount: 0, name: "BTC" },
	setCurrencyFrom: (currencyFrom: Currency) =>
		set((state: any) => ({ ...state, currencyFrom })),
	currencyTo: { amount: 0, name: "USD" },
	setCurrencyTo: (currencyTo: Currency) =>
		set((state: any) => ({ ...state, currencyTo })),
}));
