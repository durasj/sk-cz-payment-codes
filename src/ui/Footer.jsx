import { h } from 'preact';
import styled from 'styled-components';

const Paragraph = styled.p`
    text-align: center;
`;

const Footer = () => (
    <footer>
        <Paragraph>
            Find more at <a href="https://github.com/durasj/sk-cz-payment-codes">GitHub</a>.
            Created by <a href="https://duras.me/" target="_blank">Jakub Duras</a>.
        </Paragraph>
    </footer>
);

export default Footer;
