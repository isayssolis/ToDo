"use client";
import React from "react";
import Link from "next/link";

export default function Header () {
    return(
        <div className="w-full absolute z-10 bg-orange-400">
            <nav className="relative flex flex-wrap items-center justify-between mx-auto p-2">
                <Link className="font-bold text-3xl text-gray-900 dark:text-white" href="/">Tareas</Link>
                <div className="space-x-4 text-xl">
                    <Link className="font-bold text-gray-900 dark:text-white" href="tareas/nueva">Nueva tarea</Link>
                </div>
            </nav>
        </div>
    )
}