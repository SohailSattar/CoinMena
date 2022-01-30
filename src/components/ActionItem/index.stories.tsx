/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ActionItem from ".";

export default {
	title: "Components/ActionItem",
	component: ActionItem,
};

export const Primary = () => (
	<ActionItem
		title={"Click Me"}
		onClick={() => {
			alert("I was clicked");
		}}
	/>
);
