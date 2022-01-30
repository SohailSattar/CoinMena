/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Table from ".";

export default {
	title: "Components/Table",
	component: Table,
};

export const Text = () => (
	<Table
		columnsList={[
			{
				Header: "A",
				accessor: "colA",
			},
			{
				Header: "B",
				accessor: "colB",
			},
			{
				Header: "C",
				accessor: "col C",
			},
			{
				Header: "D",
				accessor: "colD",
			},
		]}
		rowList={[]}
	/>
);
