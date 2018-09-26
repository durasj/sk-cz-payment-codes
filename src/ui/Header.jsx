import { h } from 'preact';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;

    font-weight: normal;
`;

const Header = () => (
    <header>
        <H1>SK/CZ Payment Codes Reference Message Generator</H1>
    </header>
);

export default Header;
