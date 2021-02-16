import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  /* New styles */
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
}
html, body {
  min-height: 100vh;
}
#__next {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.lottie-animation {
  position: absolute;
}
.lottie-animation.index {
  width: 50%;
  top: 30%;
  left: 30%;
  z-index: 1;
}
.lottie-animation.question {
  width: 80%;
  top: 200px;
  left: 50px;
}
.lottie-animation.result {
  display: inline-block;
}
`;

export default GlobalStyle;
