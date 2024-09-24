
"use client";

import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import { ThemeSwitcher } from "./themeSwitcher";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "Profile",
      href: "/profile"
    }, 
    {
      label: "Contact",
      href: "/contact"
    }, 
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          Next Starter
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
     {
      menuItems.map((items,idx) =>(
        <NavbarItem key={idx}>
         <Link href={items?.href}>{items.label}</Link> 

          
        </NavbarItem>
      ))
     }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
        <ThemeSwitcher />

        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
             
              className="w-full"
              href={item?.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}

        <NavbarItem>
        <ThemeSwitcher />

        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
}
