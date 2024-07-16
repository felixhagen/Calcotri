import { createGlobalStyle } from 'styled-components';
import background from './background.jpg';  // Importieren des Bildes

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    #root {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url(${background}) no-repeat center center fixed;
        background-size: cover;
        filter: blur(8px);
        z-index: -1;
    }

    .main-container {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        padding: 1cm;
    }

    .content {
        position: relative;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: calc(75% - 0.5cm);
        margin-right: 1cm;
        height: 90%;
    }

    .sidebar {
        position: relative;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: calc(25% - 0.5cm);
    }
`;
