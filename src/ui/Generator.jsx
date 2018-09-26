import { h, Component } from 'preact';
import styled from 'styled-components';

import colors from './colors';
import generate from '../generate';

const Main = styled.main`
    display: flex;
    flex-direction: column;

    margin: 10rem 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    @media (min-width: 640px) {
        flex-wrap: nowrap;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    max-width: 12rem;
    margin: 1rem;
    padding: .5rem 0;

    border: 0;
    border-bottom: 0.1rem solid ${colors.chrome};

    font-size: 1rem;

    transition: .2s border;

    &:focus {
        outline: none;
        border-bottom: 0.1rem solid ${colors.primary};
    }

    &:invalid {
        border-bottom: 0.1rem solid ${colors.error};
    }
`;

const StyledResultInput = styled(StyledInput)`
    display: block;

    max-width: 22rem;

    font-size: 1.1rem;
    border-bottom: 0.1rem solid ${colors.primary};
`;

const Button = styled.button`
    background: none;

    border: none;

    color: ${colors.primary};
    font-size: 1.1rem;

    cursor: pointer;
`;

const Error = styled.div`
    padding: 1rem;

    color: ${colors.error};

    border: thin solid ${colors.error};
`;

class Generator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vs: '',
            ss: '',
            ks: '',
            reference: '',
            czechFormat: false,
            lastError: 'NO',
        };

        this.handleChange = this.onChange.bind(this);
        this.handleCopy = this.onCopy.bind(this);
        this.handleChangeFormat = this.onChangeFormat.bind(this);
    }

    onChange(e) {
        const state = {...this.state};

        state[e.target.id] = e.target.value;

        this.setState(state);

        this.regenerate();
    }

    onCopy() {
        const copyText = document.getElementById('reference');
        copyText.select();
        document.execCommand("copy");
    }

    onChangeFormat() {
        console.log('Triggered');

        const state = {
            ...this.state,
            czechFormat: !this.state.czechFormat,
        };

        this.setState(state);

        this.regenerate();
    }

    regenerate() {
        let reference = '';

        try {
            reference = generate(
                this.state.vs,
                this.state.ss,
                this.state.ks,
                this.state.czechFormat ? 'CZ' : 'SK',
            );
        } catch (e) {
            this.setState({
                ...this.state,
                lastError: e.toString(),
            });
            return;
        }

        this.setState({
            ...this.state,
            reference,
            lastError: 'NO',
        });
    }

    render() {
        const errorContainerStyle = {
            visibility: this.state.lastError !== 'NO' ? 'visible' : 'hidden',
        };

        return (
            <Main>
                <Container style={errorContainerStyle}>
                    <Error>{this.state.lastError}</Error>
                </Container>

                <Container>
                    <StyledInput
                        id="vs"
                        type="text"
                        pattern="\d{0,10}"
                        maxLength="10"
                        placeholder="VS - Variable Symbol"
                        title="VS - Variable Symbol"
                        value={this.state.vs}
                        onChange={this.handleChange} />
                    <StyledInput
                        id="ss"
                        type="text"
                        pattern="\d{0,10}"
                        maxLength="10"
                        placeholder="SS - Specific Symbol"
                        title="SS - Specific Symbol"
                        value={this.state.ss}
                        onChange={this.handleChange} />
                    <StyledInput
                        id="ks"
                        type="text"
                        pattern="\d{0,4}"
                        maxLength="4"
                        placeholder="KS - Constant Symbol"
                        title="KS - Constant Symbol"
                        value={this.state.ks}
                        onChange={this.handleChange} />
                </Container>

                <Container>
                    <StyledResultInput
                        id="reference"
                        type="text"
                        placeholder="Reference Message"
                        title="Reference Message"
                        value={this.state.reference}
                        readOnly />
                    <Button onClick={this.handleCopy}>Copy</Button>
                </Container>

                <Container>
                    <label><input
                        id="format"
                        type="checkbox"
                        checked={this.state.czechFormat}
                        onClick={this.handleChangeFormat} /> Czech format</label>
                </Container>
            </Main>
        );
    }
}

export default Generator;
