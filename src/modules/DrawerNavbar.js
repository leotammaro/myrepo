/* eslint-disable no-unreachable */
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import MenuButtonLogo from "../svg/menu.svg";

function DrawerNavbar({ listItems, scrollToSection }) {
  return (
    <Menu>
      <MenuButton as={Button} display={{ base: "block", md: "none" }}>
        <Image src={MenuButtonLogo} h={30} w={30} />
      </MenuButton>
      <MenuList>
        {listItems.map((listItem, index) => (
          <MenuItem
            color={"#000"}
            height={6}
            padding={3}
            onClick={() => {
              scrollToSection(listItem);
            }}
            key={index}
            bgColor={"none"}
          >
            {listItem}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default DrawerNavbar;
