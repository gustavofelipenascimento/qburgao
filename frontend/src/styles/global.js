import { injectGlobal } from "styled-components";
import "font-awesome/css/font-awesome.css";
import { RenderErrorBoundary } from "react-router/dist/lib/hooks";

injectGlobal`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;

}

body, html {
    background: #eee;
    font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
    text-rendering: optimizeLegbity !important;
    -webkit-font-smothing: antialiased !important;
    height: 100%;
    width: 100%;
}

`