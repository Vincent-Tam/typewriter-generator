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
  setDeleteSpeed,
  setDelaySpeed,
  setLoop,
  setCursor,
  setCursorStyle,
  setCursorBlinking,
} from "@/redux/options-slice";
import { Select, SelectSection, SelectItem, Input, Checkbox } from "@nextui-org/react";

export default function OptionsSelector() {
  const [cursor, setToggleCursor] = useState(false);
  const [cursorBlinking, setToggleCursorBlinking] = useState(false);
  const dispatch = useDispatch();
  const options = useAppSelector((state) => state.optionsReducer.value);

  function _toggleCursor($boolean: boolean) {
    setToggleCursor($boolean);
    dispatch(setCursor($boolean));
  }
  function _toggleCursorBlinking($boolean: boolean) {
    setToggleCursorBlinking($boolean);
    dispatch(setCursorBlinking($boolean));
  }
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
        <div className="flex align-middle">
          <p className="mr-2">Background Color</p>
          <input
            defaultValue={options.bgColor}
            type="color"
            className="w-6 h-6"
            onChange={(e) => dispatch(setBgColor(e.target.value))}
          />
        </div>
        <div className="flex align-middle">
          <p className="mr-2">Text Color</p>
          <input
            defaultValue={options.fontColor}
            type="color"
            className="w-6 h-6"
            onChange={(e) => dispatch(setFontColor(e.target.value))}
          />
        </div>
        <div className="flex align-middle">
          <Select
            label="Font size"
            labelPlacement="outside-left"
            size="md"
            items={[
              { value: "text-xs" },
              { value: "text-sm" },
              { value: "text-md" },
              { value: "text-lg" },
              { value: "text-xl" },
              { value: "text-2xl" },
              { value: "text-3xl" },
              { value: "text-4xl" },
              { value: "text-5xl" },
              { value: "text-6xl" },
              { value: "text-7xl" },
              { value: "text-8xl" },
              { value: "text-9xl" },
            ]}
            // placeholder="Select font size"
            className="max-w-xs font-red"
            selectedKeys={[options.fontSize]}
            onChange={(e) => dispatch(setFontSize(e.target.value))}
          >
            {(size) => <SelectItem key={size.value}>{size.value}</SelectItem>}
          </Select>
        </div>
        <div className="flex align-middle">
          <Input
            size="md"
            key="input"
            type="number"
            label="Type Speed"
            labelPlacement="outside-left"
            defaultValue="80"
            onChange={(e) => dispatch(setTypeSpeed(parseInt(e.target.value)))}
          />
        </div>
        <div className="flex align-middle">
          <Input
            size="md"
            key="input"
            type="number"
            label="Delete Speed"
            labelPlacement="outside-left"
            defaultValue="50"
            onChange={(e) => dispatch(setDeleteSpeed(parseInt(e.target.value)))}
          />
        </div>
        <div className="flex align-middle">
          <Input
            size="md"
            key="input"
            type="number"
            label="Delay Speed"
            labelPlacement="outside-left"
            defaultValue="1500"
            onChange={(e) => dispatch(setDelaySpeed(parseInt(e.target.value)))}
          />
        </div>
        <div className="flex align-middle">
          <Input
            size="md"
            key="input"
            type="number"
            label="Number of Loop"
            labelPlacement="outside-left"
            description="0 to loop infinitely"
            defaultValue="0"
            onChange={(e) => dispatch(setLoop(parseInt(e.target.value)))}
          />
        </div>
        <div className="flex align-middle">
          <Checkbox
            isSelected={cursor}
            onValueChange={_toggleCursor}>
            Enable Cursor
          </Checkbox>
        </div>
        <div className="flex align-middle">
          <Checkbox
            isSelected={cursorBlinking}
            onValueChange={_toggleCursorBlinking}>
            Enable Cursor Blinking
          </Checkbox>
        </div>
        <div className="flex align-middle">
          <Input
            size="md"
            key="input"
            type="string"
            label="Cursor Style"
            labelPlacement="outside-left"
            description="Replace default '|' style"
            defaultValue="|"
            onChange={(e) => dispatch(setCursorStyle(e.target.value))}
          />
        </div>
      </div >
    </>
  );
}
