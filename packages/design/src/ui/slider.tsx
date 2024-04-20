"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "~/utils";
import * as React from "react";

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			"relative flex w-full touch-none select-none items-center",
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className="bg-secondary relative h-2 w-full grow overflow-hidden rounded-full">
			<SliderPrimitive.Range className="absolute h-full bg-white" />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className="border-primary focus-ring block h-5 w-5 rounded-full border-2 bg-white transition-colors disabled:pointer-events-none disabled:opacity-50" />
	</SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
