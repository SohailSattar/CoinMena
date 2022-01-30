import React from "react";
import { FC, useMemo } from "react";
import { useSortBy, useTable } from "react-table";

import styles from "./styles.module.scss";

export interface TableColumn {
	Header: string;
	accessor: string;
}

interface Props {
	title?: string;
	columnsList: TableColumn[];
	// columns: string[];
	rowList: any[];
}

const Table: FC<Props> = ({ title, columnsList, rowList }) => {
	const data = useMemo(
		() => [...rowList],

		[rowList]
	);

	const columns: any = useMemo(
		() => [...columnsList],

		[columnsList]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns: columns,
				data: data,
			},
			useSortBy
		);

	return (
		<div>
			<table
				{...getTableProps()}
				className={styles.table}
				style={{ borderRadius: "5px", overflow: "hidden" }}
			>
				<thead className={styles.column}>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => {
								return (
									<th
										{...column.getHeaderProps(column.getSortByToggleProps())}
										className={styles.columnHeader}
									>
										{column.render("Header")}
									</th>
								);
							})}
						</tr>
					))}
				</thead>

				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);

						return (
							<tr {...row.getRowProps()} className={styles.row}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()} className={styles.rowItem}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
