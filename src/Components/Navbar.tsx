"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

type Props = {}

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-3 inset-x-0 max-w-lg mx-auto z-50 ", className)}
  >
    <Menu setActive={setActive}>
    <Link href={"/"}>
    <MenuItem setActive={setActive} active={active} item="Home"/>
    </Link>
      <MenuItem setActive={setActive} active={active} item="Services">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/web-dev">Web Development</HoveredLink>
          <HoveredLink href="/interface-design">Interface Design</HoveredLink>
          <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
          <HoveredLink href="/branding">Branding</HoveredLink>
        </div>
      </MenuItem>
      <Link href={"/productcount"}>
      <MenuItem setActive={setActive} active={active} item="Products"/>
      </Link>
      
      
      <MenuItem setActive={setActive} active={active} item="Pricing">
        <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/hobby">Hobby</HoveredLink>
          <HoveredLink href="/individual">Individual</HoveredLink>
          <HoveredLink href="/team">Team</HoveredLink>
          <HoveredLink href="/enterprise">Enterprise</HoveredLink>
        </div>
      </MenuItem>
    </Menu>
  </div>
  )
}

export default Navbar