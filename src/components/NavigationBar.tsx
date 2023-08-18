import { SemiBoldText } from './TextComponents';
import MHLogo from '../resources/images/melissaharijanto-logo.svg';
import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { useState } from 'react';
import { toResume } from '../constants/links';
import { screens } from '../constants/constants';
import MenuIcon from '@mui/icons-material/Menu';

const Logo = styled.img`
    ${screens.md} {
        width: 10vw;
    }
    ${screens.lg} {
        width: 6vw;
    }
    width: 17.5vw;
`;

const NavigationWrapper = styled.div<{ onTop: boolean }>`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background: ${(props) =>
        props.onTop
            ? 'transparent'
            : `linear-gradient(${Colors.black}, ${Colors.black_75}, transparent)`};
    backdrop-filter: blur(6px);
    ${screens.md} {
        align-items: center;
    }
`;

const Links = styled.div`
    // display: none;
    flex-direction: row;
    float: right;
    margin-right: 2em;
    display: flex;
`;

const LinkDiv = styled.div`
    display: none;
    ${screens.md} {
        margin: 0 1em; 
        display: flex;
    }
`;

const HrefLink= styled.a`
    text-decoration: none;
    padding: 0 1em;
    ${screens.md} {
        padding: 0;
    }
`;

const LogoHref = styled.a`
    text-decoration: none;
    margin-right: auto;
    margin-left: 2em;
    padding: 1em 0;
`;

const OnlyAppearsOnMobile = styled.div`
    display: flex;
    cursor: pointer;
    padding: 0.5em;
    border-radius: 0.5em;
    flex-direction: column;
    ${screens.md} {
        display: none;
    }
`

const MobileDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-top: 1em;
    ${screens.md} {
        display: none;
    }
`

const MobileNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.black_50};
    border-radius: 0.5em;
    padding: 0.5em 0;
`

const WhiteLine = styled.hr`
    display: flex;
    width: 100%;
    background-color: ${Colors.white_75};
    border: 0;
    height: 1px;
`

const NavigationBar = () => {
    const [onTop, setOnTop] = useState<boolean>(true);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const openOrCloseMenu = () => {
        setOpenMenu(state => !state);
    }

    const closeMenu = () => {
        setOpenMenu(false);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            setOnTop(false);
        } else {
            setOnTop(true);
        }
    });

    return (
        <NavigationWrapper onTop={onTop}>
            <LogoHref href="#welcome">
                <Logo src={MHLogo} />
            </LogoHref>
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
                
                    {openMenu? (
                        <MobileDiv>
                            <OnlyAppearsOnMobile onClick={openOrCloseMenu}>
                                <MenuIcon sx={{color: Colors.white_75}}/>
                            </OnlyAppearsOnMobile>
                            <MobileNavigationContainer>
                                <HrefLink href="#welcome" onClick={closeMenu}>
                                    <SemiBoldText hover hoverColor={Colors.yellow}>home</SemiBoldText>
                                </HrefLink>
                                <WhiteLine/>
                                <HrefLink href="#about" onClick={closeMenu}>
                                    <SemiBoldText hover hoverColor={Colors.yellow}>about</SemiBoldText>
                                </HrefLink>
                                <WhiteLine/>
                                <HrefLink href="#experience" onClick={closeMenu}>
                                    <SemiBoldText hover hoverColor={Colors.yellow}>experience</SemiBoldText>
                                </HrefLink>
                                <WhiteLine/>
                                <HrefLink onClick={closeMenu}>
                                    <SemiBoldText hover hoverColor={Colors.yellow} onClick={toResume}>resume</SemiBoldText>
                                </HrefLink>
                            </MobileNavigationContainer>
                        </MobileDiv>
                    ) : (
                        <MobileDiv>
                            <OnlyAppearsOnMobile onClick={openOrCloseMenu}>
                            <MenuIcon sx={{color: Colors.white}}/>
                            </OnlyAppearsOnMobile>
                        </MobileDiv>
                    )}
            </Links>
        </NavigationWrapper>
    );
};

export default NavigationBar;
