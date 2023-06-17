import { SemiBoldText } from './TextComponents';
import MHLogo from '../resources/images/melissaharijanto-logo.svg';
import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { useState } from 'react';
import { toResume } from '../constants/links';

const Logo = styled.img`
    width: 6vw;
    margin-right: auto;
    margin-left: 2em;
    padding: 1em 0;
`;

const NavigationWrapper = styled.div<{ onTop: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        props.onTop
            ? 'transparent'
            : `linear-gradient(${Colors.black}, ${Colors.black_75}, transparent)`};
    backdrop-filter: blur(6px);
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    float: right;
    margin-right: 2em;
`;

const LinkDiv = styled.div`
    margin: 0 1em;
`;

const HrefLink = styled.a`
    text-decoration: none;
`;

const NavigationBar = () => {
    const [onTop, setOnTop] = useState<boolean>(true);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setOnTop(false);
        } else {
            setOnTop(true);
        }
    });

    return (
        <NavigationWrapper onTop={onTop}>
            <Logo src={MHLogo} />
            <Links>
                <LinkDiv>
                    <HrefLink href="#welcome">
                        <SemiBoldText
                            fontSize="1.25em"
                            hover
                            hoverColor={Colors.yellow}>
                            home
                        </SemiBoldText>
                    </HrefLink>
                </LinkDiv>
                <LinkDiv>
                    <HrefLink href="#about">
                        <SemiBoldText
                            fontSize="1.25em"
                            hover
                            hoverColor={Colors.yellow}>
                            about
                        </SemiBoldText>
                    </HrefLink>
                </LinkDiv>
                <LinkDiv>
                    <HrefLink href="#experience">
                        <SemiBoldText
                            fontSize="1.25em"
                            hover
                            hoverColor={Colors.yellow}>
                            experience
                        </SemiBoldText>
                    </HrefLink>
                </LinkDiv>
                <LinkDiv>
                    <SemiBoldText
                        fontSize="1.25em"
                        hover
                        onClick={toResume}
                        hoverColor={Colors.yellow}>
                        resume
                    </SemiBoldText>
                </LinkDiv>
            </Links>
        </NavigationWrapper>
    );
};

export default NavigationBar;
