import { FC } from "react";
import clsx from "clsx";
import { Dialog } from "@headlessui/react";

interface Props {
	title?: string;
	subtitle?: string;
	isOpen?: boolean;
	className?: string;
	onClose: () => void;
	children: any;
}

const Modal: FC<Props> = ({
	title = "",
	subtitle = "",
	isOpen = false,
	className,
	onClose,
	children,
}) => {
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			className={clsx(
				"fixed inset-0 z-10 flex items-center justify-center overflow-y-auto rounded-md",
				{
					"bg-slate-50": isOpen === true,
				}
			)}
		>
			<div
				className={
					"flex flex-col bg-gray-800 text-white w-96 py-8 px-4 text-center"
				}
			>
				<Dialog.Overlay />

				{title !== "" && (
					<Dialog.Title className="text-red-500 text-3xl py-2">
						{title}
					</Dialog.Title>
				)}
				{subtitle !== "" && <Dialog.Description>{subtitle}</Dialog.Description>}

				{children}
			</div>
		</Dialog>
	);
};

export default Modal;
