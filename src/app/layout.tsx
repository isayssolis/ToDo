"use client";
import localFont from "next/font/local";
import "./globals.css";
import {Provider} from "@/context/tareas";
import Header from "@/components/header";
import React from "react";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});




export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
            <Header />
            <br/>
            <div className="container mx-auto px-12 mt-10">
                {children}
            </div>
        </Provider>
        </body>
        </html>
    );
}
