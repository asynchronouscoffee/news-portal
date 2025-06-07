"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toogleMobileMenu = () => {
        setIsMobileMenuOpen
    }
    return (
        <div className="lg:hidden">
            <Button onClick={toogleMobileMenu}>
                {
                    isMobileMenuOpen ? (<AiOutlineClose size={24} />
                    ) : (<AiOutlineMenu size={24} />)
                }
            </Button>
            )
        </div>
    )
}
export default MobileMenu;