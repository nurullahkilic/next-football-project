"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

export default function CustomPopover({ content, backdrop }) {
  return (
    <Popover showArrow offset={10} placement="bottom" backdrop="blur">
      <PopoverTrigger>{backdrop}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </Popover>
  );
}
