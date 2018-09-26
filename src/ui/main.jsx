import { h, render } from 'preact';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

import '../polyfills';

import Header from './Header';
import Generator from './Generator';
import Footer from './Footer';
import colors from './colors';

const appEl = document.querySelector('#app');

injectGlobal`
    body {
        margin: 0;

        font-family: -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            "Roboto",
            "Helvetica Neue", Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: ${colors.dark};
    }
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
`;

render((
    <Layout>
        <Header />
        <Generator />
        <Footer />
    </Layout>
), appEl, appEl.firstElementChild);
