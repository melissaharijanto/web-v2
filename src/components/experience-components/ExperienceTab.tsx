import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { BoldText, RegularText, SemiBoldText } from '../TextComponents';

import { BULLET_POINT, EM_DASH } from '../../constants/constants';
import { Experience } from '../../constants/work-experience';
import { TextDiv } from '../about-and-projects/Profile';
import { ExperienceGrid } from './TitleHeading';

const Container = styled.div`
    background: linear-gradient(to right, ${Colors.pink_50}, ${Colors.blue_50});
    // border: 1px solid ${Colors.white_75};
    padding: 1em;
    border-radius: 10px;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const ExperienceTab = ({ experience }: { experience: Experience }) => {
    return (
        <Container>
            <ExperienceGrid>
                <TitleDiv>
                    <BoldText marginBottom='0.25em' color={Colors.yellow}>{experience.position} </BoldText>
                    <SemiBoldText marginBottom='0.25em'>{EM_DASH} {experience.location}</SemiBoldText>
                    <RegularText fontSize='0.875em' italic>{experience.type}</RegularText>
                </TitleDiv>
                <TitleDiv>
                    <SemiBoldText>{experience.period}</SemiBoldText>
                </TitleDiv>
                <TitleDiv>
                    {experience.job_description.map((task) =>(
                        <SemiBoldText fontSize='0.875em' lineHeight='1.5'>{BULLET_POINT} {task}</SemiBoldText>
                    )
                    )}
                </TitleDiv>
            </ExperienceGrid>
        </Container>
    );
};

export default ExperienceTab;
