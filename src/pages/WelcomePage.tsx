import React from 'react';
import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { WelcomePageBackground } from '../components/Background';

const WelcomeText = styled.span`
    font-family: 'Metropolis-Bold', 'sans-serif';
    color: ${Colors.yellow};
    font-size: 2.5em;
`

const Container = styled.div`
    background: linear-gradient(${Colors.blue_50} 10%, ${Colors.white_10} 90%);
    padding: 2em;
    border-radius: 20px;
`

const Text = styled.span`
    font-family: 'Metropolis-SemiBold', 'sans-serif';
    color: ${Colors.white};
    font-size: 1.5em;
`

const LineBreak = styled.div`
    padding: 0.5em;
`

const LeftAlignedText = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
`

const WhiteHorizontalLine = styled.hr`
    width: 25vw;
    background-color: ${Colors.white};
    color: ${Colors.white};
    height: 1px;
    border: 0;
    margin-left: 0;
    margin-top: 1em;
    margin-bottom: 1em;
`

const Button = styled.button<{backgroundColor?: string}>`
    background: ${props => props.backgroundColor? `linear-gradient(${props.backgroundColor}, transparent)` : `linear-gradient(${Colors.pink_75}, transparent)`};
    color: ${Colors.white};
    cursor: pointer;
    font-family: 'Metropolis-SemiBold', 'sans-serif';
    border: 2px solid ${Colors.white};
    padding: 0.5em 0.875em 0.5em 0.875em;
    border-radius: 10px;
    font-size: 1.25em;
    transition: background 0.5s ease-out;

    :hover {
        background: linear-gradient(${Colors.black_50}, transparent);
    }
`

// const Text = styled.span`
//     position: relative;
//     width: 24em;
//     margin: 0 auto;
//     border-right: 2px solid rgba(255,255,255,.75);
//     font-size: 180%;
//     text-align: center;
//     white-space: nowrap;
//     overflow: hidden;
//     transform: translateY(-50%);  
//     color: white;  
//     animation: typewriter 4s steps(44) 1s 1 normal both,
//              blinkTextCursor 500ms steps(44) infinite normal;

//     @keyframes typewriter{
//         from{width: 0;}
//         to{width: 24em;}
//     }
//     @keyframes blinkTextCursor{
//         from{border-right-color: rgba(255,255,255,.75);}
//         to{border-right-color: transparent;}
//     }
// `


const WelcomePage = () => {
    return (
        <WelcomePageBackground>
            <Container>
                <LeftAlignedText>
                    <WelcomeText>welcome.</WelcomeText>
                    <LineBreak/>
                    <Text>you are now viewing</Text>
                    <Text>melissa's portfolio website.</Text>
                    <WhiteHorizontalLine/>
                    <div>
                    <Button>Linkedin</Button>
                    </div>
                </LeftAlignedText>
            </Container>
        </WelcomePageBackground>
    )
}

export default WelcomePage;