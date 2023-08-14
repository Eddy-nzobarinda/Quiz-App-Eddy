import { pid } from "process";
import styled, {createGlobalStyle} from "styled-components";

//@ts-ignore


export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-color: #black;
    border: 2px solid green
    display: flex;
    justify-content: center 
} 
*{
   box-sizing: border-box;
   font-family: sans-serif
}

`