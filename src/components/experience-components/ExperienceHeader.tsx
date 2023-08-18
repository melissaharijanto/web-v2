import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import Experience from '../../resources/images/experience-icon.svg';
import { BoldText, SemiBoldText } from '../TextComponents';
import { screens } from '../../constants/constants';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${screens.md} {
        flex-direction: row;
    }
`;

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0;
    align-items: center;
    justify-content: center;

    ${screens.md} {
        align-items: flex-start;
        margin-left: 3em;
    }
`;

const ExperienceIcon = styled.img`
    width: 30vw;
    margin-bottom: 1em;
    ${screens.md} {
        width: 10vw;
        margin-bottom: 0;
    }
`;

const ExperienceHeader = () => {
    return (
        <HeaderDiv>
            <ExperienceIcon src={Experience} />
            <ExperienceDiv>
                <BoldText fontSize="3.5em" mobileFontSize='1.75em'>experience</BoldText>
                <SemiBoldText
                    textAlign="center"
                    marginTop="0.75em"
                    color={Colors.yellow}
                    fontSize="1.25em"
                    mobileFontSize='1em'>
                    a list of my relevant experiences & activities
                </SemiBoldText>
            </ExperienceDiv>
        </HeaderDiv>
    );
};

export default ExperienceHeader;
