import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { WelcomePageBackground } from '../components/Background';
import { toLinkedIn, toResume } from '../constants/links';
import { SemiBoldText } from '../components/TextComponents';
import { SPACER } from '../constants/constants';

const WelcomeText = styled.span`
    font-family: 'Metropolis-Bold', 'sans-serif';
    color: ${Colors.yellow};
    font-size: 2.5em;
`;

const Container = styled.div`
    background: linear-gradient(${Colors.blue_50} 10%, transparent 90%);
    padding: 3em;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const Text = styled.span`
    font-family: 'Metropolis-SemiBold', 'sans-serif';
    color: ${Colors.white};
    font-size: 1.25em;
    margin-bottom: 0.5em;
`;

const LineBreak = styled.div`
    padding: 0.5em;
`;

const WhiteHorizontalLine = styled.hr`
    width: 25vw;
    background-color: ${Colors.white};
    color: ${Colors.white};
    height: 1px;
    border: 0;
    // margin-left: 0;
    margin-top: 1em;
    margin-bottom: 1em;
`;

const Button = styled.button<{ backgroundColor?: string }>`
    background: ${(props) =>
        props.backgroundColor
            ? `linear-gradient(${props.backgroundColor}, transparent)`
            : `linear-gradient(${Colors.pink_75}, transparent)`};
    color: ${Colors.white};
    cursor: pointer;
    font-family: 'Metropolis-SemiBold', 'sans-serif';
    border: 2px solid ${Colors.white};
    padding: 0.5em 0.875em 0.5em 0.875em;
    border-radius: 10px;
    font-size: 1em;

    :hover {
        background: linear-gradient(${Colors.black_50}, transparent);
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    width: 80%;
`;

const WelcomePage = () => {
    return (
        <WelcomePageBackground>
            <Container>
                <SemiBoldText marginBottom='0.5em' fontSize='1.25em'>
                    hello! i am
                </SemiBoldText>
                <WelcomeText>
                    melissa anastasia harijanto
                </WelcomeText>
                <WhiteHorizontalLine/>
                <SemiBoldText>
                    nus computer science undergraduate{SPACER}frontend & web dev enthusiast
                </SemiBoldText>
            </Container>
        </WelcomePageBackground>
    );
};

export default WelcomePage;
