"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import {
  reset,
  setBgColor,
  setFontSize,
  setFontColor,
  setWords,
  setTypeSpeed,
  setDelaySpeed,
  setCursorStyle,
  setDeleteSpeed,
  setCursorBlinking,
} from "@/redux/options-slice";
import { Select, SelectSection, SelectItem, Input } from "@nextui-org/react";

export default function OptionsSelector() {
  const dispatch = useDispatch();
  const bgColor = useAppSelector((state) => state.optionsReducer.value.bgColor);
  return (
    <>
      <div className="flex flex-row h-full w-full">
        <div className="flex flex-col flex-1 gap-4 item-center justify-center">
          <div className="flex align-middle">
            <p className="mr-2">Background Color</p>
            <input
              type="color"
              className="w-6 h-6"
              onChange={(e) => dispatch(setBgColor(e.target.value))}
            />
          </div>
          <div className="flex align-middle">
            <p className="mr-2">Text Color</p>
            <input
              type="color"
              className="w-6 h-6"
              onChange={(e) => dispatch(setBgColor(e.target.value))}
            />
          </div>
          <div className="flex align-middle">
            <Select
              label="Font size"
              labelPlacement="outside-left"
              size="md"
              items={[
                { value: "xs" },
                { value: "sm" },
                { value: "md" },
                { value: "lg" },
                { value: "xl" },
              ]}
              placeholder="Select font size"
              className="max-w-xs font-red"
              onChange={(e) => dispatch(setFontSize(e.target.value))}
            >
              {(size) => <SelectItem key={size.value}>{size.value}</SelectItem>}
            </Select>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex align-middle">
            {/* <p>Type Speed</p> */}
            <Input
              size="md"
              key="input"
              type="number"
              label="Type Speed"
              labelPlacement="outside-left"
            />
          </div>
        </div>
      </div>
    </>
  );
}
