/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Button from ".";

export default {
	title: "Components/Button",
	component: Button,
};

export const InformationButton = () => (
	<Button>Default Information button</Button>
);

export const Primary = () => <Button isPrimary>Primary</Button>;

export const RoundButton = () => <Button isround={true}>Round Button</Button>;

export const RoundGradiant = () => (
	<Button isround={true} isGradient={true}>
		Round Gradiant
	</Button>
);
