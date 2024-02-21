import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function NavTwo() {
  return (
    <Navbar isBordered className="my-4">
      <NavbarBrand>
        
        <p className="font-bold text-inherit hidden">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
          <h1>Android</h1>

          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <h1>Iphone</h1>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           <h1>Windows</h1>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
       
      </NavbarContent>
    </Navbar>
  );
}
