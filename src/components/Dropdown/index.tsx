import { FC } from "react";
import Select from "react-select";
import { Id } from "../../utils/types";

export interface DropdownOption {
	value: Id;
	label: any;
}

interface Props {
	options: DropdownOption[];
	hasBorder?: boolean;
	onSelect: (option: DropdownOption) => void;
	value?: DropdownOption;
}

const Dropdown: FC<Props> = ({
	options,
	hasBorder = true,
	onSelect,
	value,
}) => {
	const optionSelectHandler = (option: any) => {
		onSelect(option);
	};

	const customStyles = {
		option: (provided: any, state: { isSelected: any }) => ({
			...provided,
			borderBottom: "1px solid #e5e5e5",
			color: state.isSelected ? "white" : "black",
			// padding: 20,
		}),
		control: () => ({
			display: "flex",
			border: hasBorder ? "1px solid #e5e5e5" : "",
			width: 250,
			fontSize: 18,
		}),
		singleValue: (provided: any, state: { isDisabled: any }) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = "opacity 300ms";
			const display = "flex";

			return { ...provided, opacity, transition, display };
		},
	};

	return (
		<Select
			styles={customStyles}
			options={options}
			onChange={optionSelectHandler}
			value={value}
		/>
	);
};

export default Dropdown;
