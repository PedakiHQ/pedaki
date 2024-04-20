import IconCheck from "~/ui/icons/IconCheck.tsx";
import { cn } from "~/utils";
import type React from "react";
import { Callout, CalloutContent, CalloutIcon } from "./index.tsx";

interface InfoCalloutProps {
	children: React.ReactNode;
	className?: string;
}

const SuccessCallout = ({ children, className }: InfoCalloutProps) => {
	return (
		<Callout className={cn("border-greenA-4", "bg-greenA-3", className)}>
			<CalloutIcon>
				<IconCheck className="text-greenA-10 h-4 w-4" />
			</CalloutIcon>
			<CalloutContent className="text-greenA-10">{children}</CalloutContent>
		</Callout>
	);
};

export default SuccessCallout;
