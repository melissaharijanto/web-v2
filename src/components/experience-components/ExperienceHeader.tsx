import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import Experience from '../../resources/images/experience-icon.svg';
import { BoldText, SemiBoldText } from '../TextComponents';

const HeaderDiv = styled.div`
    display: flex;
`;

const ExperienceDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 3em;
`;

const ExperienceIcon = styled.img`
    width: 10vw;
    // color: ${Colors.blue};
`;

const ExperienceHeader = () => {
    return (
        <HeaderDiv>
            <ExperienceIcon src={Experience} />
            <ExperienceDiv>
                <BoldText fontSize="3.5em">experience</BoldText>
                <SemiBoldText
                    textAlign="left"
                    marginTop="0.75em"
                    color={Colors.yellow}
                    fontSize="1.25em">
                    a list of my relevant experiences & activities
                </SemiBoldText>
            </ExperienceDiv>
        </HeaderDiv>
    );
};

export default ExperienceHeader;
