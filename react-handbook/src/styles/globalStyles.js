import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }
    #root {
        display: flex;
    }
    body{
        font-size:14px;
        background-color:rgba(255,255,255,1);
        font-family: 'Noto Sans KR';
        letter-spacing: -0.2px;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;

  }
`;
export default GlobalStyles;
