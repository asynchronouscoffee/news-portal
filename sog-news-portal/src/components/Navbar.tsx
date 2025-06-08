"use client" //for buttonOnclick

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Switch } from "@/components/ui/switch";
import MobileMenu from "@/components/MobileMenu";
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname = usePathname()

    return (
        <header className="py-4 bg-white text-gray-900 shadow-md transition-colors duration-300">
            <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link href="/">SOG Purworejo</Link>
                </div>

                {/* Dekstop Navigation */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex space-x-8">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/blog" className={`${pathname === '/blog' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>Blog</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/tentang-kami" className={`${pathname === '/tentang-kami' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>Tentang Kami</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/hubungi-kami" className={`${pathname === '/hubungi-kami' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>Hubungi Kami</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                    
                {/* Color inverter and login button */}
                <div className="hidden lg:flex items-center space-x-4">
                    <div className="flex items-center">
                        <span className="mr-2">Mode Malam</span>
                        <Switch />
                    </div>
                    <Button variant="default" className="px-6">Login</Button>
                </div>

                {/* For mobile */}
                <MobileMenu/>
            </nav>
        </header>
    )
}

export default Navbar