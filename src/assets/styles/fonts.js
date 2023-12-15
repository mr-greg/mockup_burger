import { createGlobalStyle } from "styled-components";
import AlterwaveRegular from "../fonts/alterwave/Alterwave-Regular.ttf";
import AlterwaveBold from "../fonts/alterwave/Alterwave-Bold.ttf";
import AlterwaveExtraBold from "../fonts/alterwave/Alterwave-ExtraBold.ttf";
import AlterwaveThin from "../fonts/alterwave/Alterwave-Thin.ttf";
import Quicksand from "../fonts/quicksand/quicksand-variable.ttf";
import Roboto from "../fonts/Roboto-Regular.ttf";
import ZhiMangXing from "../fonts/ZhiMangXing-Regular.ttf";

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "AlterwaveRegular";
  src: url(${AlterwaveRegular}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "AlterwaveBold";
  src: url(${AlterwaveBold}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "AlterwaveExtraBold";
  src: url(${AlterwaveExtraBold}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  line-height: 1;
}
@font-face {
  font-family: "AlterwaveThin";
  src: url(${AlterwaveThin}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Quicksand";
  src: url(${Quicksand}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Roboto";
  src: url(${Roboto}) format("opentype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "ZhiMangXing";
  src: url(${ZhiMangXing}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;
