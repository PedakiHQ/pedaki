"use client";
import {IconArrowRight} from "@pedaki/design/icons";
import {Burger} from "@pedaki/design";
import {useState} from "react";

export default function Home() {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive((active) => !active);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-black">
            <IconArrowRight />
            <Burger active={active} onClick={handleClick} />
        </div>
    )
}
