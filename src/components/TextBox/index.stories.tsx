/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import TextBox from ".";

export default {
	title: "Components/TextBox",
	component: TextBox,
};

export const Text = () => (
	<TextBox
		type="text"
		value={"xx"}
		onChange={function (event: any): void {
			// throw new Error("Function not implemented.");
		}}
	/>
);

export const Password = () => (
	<TextBox
		type="password"
		value={"xxx"}
		onChange={function (event: any): void {
			// throw new Error("Function not implemented.");
		}}
	/>
);
