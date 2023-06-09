import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { WelcomePageBackground } from '../components/Background';
import { toLinkedIn, toResume } from '../constants/links';

const WelcomeText = styled.span`
    font-family: 'Metropolis-Bold', 'sans-serif';
    color: ${Colors.yellow};
    font-size: 2.5em;
`;

const Container = styled.div`
    background: linear-gradient(${Colors.blue_50} 10%, transparent 90%);
    padding: 2em;
    border-radius: 20px;
`;

const Text = styled.span`
    font-family: 'Metropolis-SemiBold', 'sans-serif';
    color: ${Colors.white};
    font-size: 1.5em;
`;

const LineBreak = styled.div`
    padding: 0.5em;
`;

const LeftAlignedText = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`;

const WhiteHorizontalLine = styled.hr`
    width: 25vw;
    background-color: ${Colors.white};
    color: ${Colors.white};
    height: 1px;
    border: 0;
    margin-left: 0;
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
    font-size: 1.25em;

    :hover {
        background: linear-gradient(${Colors.black_50}, transparent);
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
`;

const WelcomePage = () => {
    return (
        <WelcomePageBackground>
            <Container>
                <LeftAlignedText>
                    <WelcomeText>welcome.</WelcomeText>
                    <LineBreak />
                    <Text>you are now viewing</Text>
                    <Text>melissa's portfolio website.</Text>
                    <WhiteHorizontalLine />
                    <Grid>
                        <div>
                            <Button onClick={toLinkedIn}>linkedin</Button>
                        </div>
                        <div>
                            <Button
                                backgroundColor={Colors.yellow_75}
                                onClick={toResume}>
                                resume
                            </Button>
                        </div>
                    </Grid>
                </LeftAlignedText>
            </Container>
        </WelcomePageBackground>
    );
};

export default WelcomePage;
