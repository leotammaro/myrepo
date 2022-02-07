import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function ProfileOptions() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        onClick={onOpen}
        color={"primary"}
        borderColor={"primary"}
        border={"1px"}
        _focus={{ outline: "none" }}
        ref={btnRef}
      >
        Know me
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
        size={"md"}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Text>asd</Text>
            <Text>asd</Text>
            <Text>asd</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ProfileOptions;
