import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { WelcomePageBackground } from '../components/Background';
import {
    BoldText,
    RegularText,
    SemiBoldText,
} from '../components/TextComponents';
import { NORMAL_SPACE, SPACER } from '../constants/constants';
import { redirect } from '../constants/utils';

const Container = styled.div`
    background: linear-gradient(${Colors.blue_50} 10%, transparent 90%);
    padding: 3em;
    margin: 3em;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

const WelcomePage = () => {
    return (
        <WelcomePageBackground id='welcome'>
            <Container>
                <SemiBoldText marginBottom="0.5em" fontSize="1.25em">
                    hello! i am
                </SemiBoldText>
                <BoldText
                    color={Colors.yellow}
                    fontSize="2.5em"
                    textAlign="center">
                    melissa anastasia harijanto
                </BoldText>
                <WhiteHorizontalLine />
                <SemiBoldText marginBottom="1em" textAlign="center">
                    nus computer science undergraduate{SPACER}frontend & web dev
                    enthusiast
                </SemiBoldText>
                <RegularText marginBottom='1em' fontSize='0.875em'>
                    <RegularText italic>click{NORMAL_SPACE}</RegularText>
                    <RegularText
                        italic
                        hover
                        color={Colors.blue}
                        hoverColor={Colors.blue_75}
                        onClick={() => redirect('https://www.spotify.com')}>
                        here
                    </RegularText>
                    <RegularText italic>
                        {NORMAL_SPACE}for design inspiration.
                    </RegularText>
                </RegularText>
                <RegularText marginBottom='0.75em' fontSize='0.875em'>
                    <RegularText>best viewed in{NORMAL_SPACE}</RegularText>
                    <RegularText color={Colors.pink}>desktop</RegularText>
                    <RegularText>.</RegularText>
                </RegularText>
            </Container>
        </WelcomePageBackground>
    );
};

export default WelcomePage;
