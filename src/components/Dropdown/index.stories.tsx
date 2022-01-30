/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Dropdown, { DropdownOption } from ".";

export default {
	title: "Components/Dropdown",
	component: Dropdown,
};

const options: DropdownOption[] = [
	{ value: 1, label: "Option 1" },
	{ value: 2, label: "Option 2" },
	{ value: 3, label: "Option 3" },
	{ value: 4, label: "Option 4" },
];

export const Primary = () => <Dropdown options={options} onSelect={() => {}} />;
