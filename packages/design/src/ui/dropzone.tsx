// https://github.com/shadcn-ui/ui/issues/163#issuecomment-1871434185
import { Input } from "~/ui/input.tsx";
import { cn } from "~/utils/cn";
import type { ChangeEvent } from "react";
import React, { useRef } from "react";

interface DropzoneProps
	extends Omit<
		React.InputHTMLAttributes<HTMLInputElement>,
		"value" | "onChange"
	> {
	className?: string;
	children?: React.ReactNode;
	handleOnDrop: (acceptedFiles: FileList | null) => void;
	accept?: string;
}

const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
	({ className, children, handleOnDrop, accept, ...props }, ref) => {
		const inputRef = useRef<HTMLInputElement | null>(null);
		// Function to handle drag over event
		const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			handleOnDrop(null);
		};

		// Function to handle drop event
		const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
			e.preventDefault();
			e.stopPropagation();
			const { files } = e.dataTransfer;
			if (inputRef.current) {
				inputRef.current.files = files;
				handleOnDrop(files);
			}
		};

		// Function to simulate a click on the file input element
		const handleButtonClick = () => {
			if (inputRef.current) {
				inputRef.current.click();
			}
		};
		return (
			// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
			<div
				ref={ref}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				onClick={handleButtonClick}
				className={cn(
					"hover:bg-weak hover:border-muted-foreground/50 rounded-sm border-2 border-dashed bg-white p-4 transition-all duration-200 ease-in-out hover:cursor-pointer",
					className,
				)}
			>
				<Input
					{...props}
					value={undefined}
					ref={inputRef}
					type="file"
					wrapperClassName="hidden"
					className="hidden"
					accept={accept}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleOnDrop(e.target.files)
					}
				/>

				{children}
			</div>
		);
	},
);
Dropzone.displayName = "Dropzone";

export default Dropzone;
