import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: Options;
};
type Options = {
  bgColor: string;
  fontColor: string;
  fontSize: string;
  words: string[];
  typeSpeed: number;
  deleteSpeed: number;
  delaySpeed: number;
  loop: number | boolean;
  cursor: boolean;
  cursorStyle: string;
  cursorBlinking: boolean;
};

const initialState = {
  value: {
    bgColor: "#ffffff",
    fontColor: "#000000",
    fontSize: "text-xl",
    words: [],
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500,
    loop: 0, //number|boolean (Control how many times to run. 0 | false to run infinitely)
    cursor: false,
    cursorStyle: "|",
    cursorBlinking: false,
  } as Options,
} as InitialState;

export const options = createSlice({
  name: "options",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setOptions: (state, action: PayloadAction<Options>) => {
      state.value = action.payload;
    },
    setBgColor: (state, action: PayloadAction<string>) => {
      state.value.bgColor = action.payload;
    },
    setFontColor: (state, action: PayloadAction<string>) => {
      state.value.fontColor = action.payload;
    },
    setFontSize: (state, action: PayloadAction<string>) => {
      state.value.fontSize = action.payload;
    },
    setWords: (state, action: PayloadAction<string[]>) => {
      state.value.words = action.payload;
    },
    setTypeSpeed: (state, action: PayloadAction<number>) => {
      state.value.typeSpeed = action.payload;
    },
    setDeleteSpeed: (state, action: PayloadAction<number>) => {
      state.value.deleteSpeed = action.payload;
    },
    setDelaySpeed: (state, action: PayloadAction<number>) => {
      state.value.delaySpeed = action.payload;
    },
    setLoop: (state, action: PayloadAction<number | boolean>) => {
      state.value.loop = action.payload;
    },
    setCursor: (state, action: PayloadAction<boolean>) => {
      state.value.cursor = action.payload;
    },
    setCursorStyle: (state, action: PayloadAction<string>) => {
      state.value.cursorStyle = action.payload;
    },
    setCursorBlinking: (state, action: PayloadAction<boolean>) => {
      state.value.cursorBlinking = action.payload;
    },
  },
});

export const {
  reset,
  setOptions,
  setBgColor,
  setFontColor,
  setFontSize,
  setWords,
  setTypeSpeed,
  setDeleteSpeed,
  setDelaySpeed,
  setLoop,
  setCursor,
  setCursorStyle,
  setCursorBlinking,
} = options.actions;
export default options.reducer;
