import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { RegularText, SemiBoldText } from '../components/TextComponents';
import { COPYRIGHT_SYMBOL, SPACER, screens } from '../constants/constants';
import MHLogo from '../resources/images/melissaharijanto-logo.svg';
import { TextDiv } from '../components/about-and-projects/Profile';
import { toGithub, toLinkedIn, toResume } from '../constants/links';

const FooterDiv = styled.div`
    height: 30vh;
    background: linear-gradient(${Colors.black}, ${Colors.purple});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Logo = styled.img`
    width: 15vw;
    ${screens.md} {
        width: 7.5vw;
    }
`;

const Footer = () => {
    return (
        <FooterDiv>
            <Logo src={MHLogo} />
            <TextDiv>
                <SemiBoldText fontSize="1em" color={Colors.yellow} mobileFontSize='0.875em'>
                    Copyright {COPYRIGHT_SYMBOL} 2023 Melissa Anastasia
                    Harijanto
                </SemiBoldText>
            </TextDiv>
            <SemiBoldText fontSize="1em" mobileFontSize='0.875em'>
                <SemiBoldText
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={toGithub}>
                    github
                </SemiBoldText>
                <SemiBoldText>{SPACER}</SemiBoldText>
                <SemiBoldText
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={toLinkedIn}>
                    linkedin
                </SemiBoldText>
                <SemiBoldText>{SPACER}</SemiBoldText>
                <SemiBoldText
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={toResume}>
                    resume
                </SemiBoldText>
            </SemiBoldText>
            <TextDiv>
                <RegularText fontSize='0.75em' italic>Built with React Typescript</RegularText>
            </TextDiv>
        </FooterDiv>
    );
};

export default Footer;
