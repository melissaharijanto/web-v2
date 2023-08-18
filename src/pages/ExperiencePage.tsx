import styled from 'styled-components';
import { ExperienceBackground } from '../components/Background';
import { Colors } from '../constants/colors';
import { ContentDiv } from './IntroAndProjectsPage';
import ExperienceTab from '../components/experience-components/ExperienceTab';
import { experiences } from '../constants/work-experience';
import { Container, TextDiv } from '../components/about-and-projects/Profile';
import ExperienceHeader from '../components/experience-components/ExperienceHeader';
import JobHeader from '../components/experience-components/TitleHeading';
import { screens } from '../constants/constants';

const WhiteLine = styled.hr`
    display: none;
    ${screens.md} {
        display: flex;
        width: 100%;
        background-color: ${Colors.white_75};
        border: 0;
        height: 1px;
    }
`

const ExperienceTabWrapper = styled.div`
    margin-top: 0.25em;
    margin-bottom: 0.5em;
`

const ExperiencePage = () => {
    return (
        <ExperienceBackground id='experience'>
            <ContentDiv>
                <Container gradientColor={Colors.purple}>
                    <ExperienceHeader/>
                    <TextDiv/>
                    <JobHeader/>
                    <WhiteLine/>
                    {experiences.map((experience) => (
                        <ExperienceTabWrapper>
                        <ExperienceTab experience={experience}/>
                        </ExperienceTabWrapper>
                    ))}
                </Container>
            </ContentDiv>
        </ExperienceBackground>
    );
};

export default ExperiencePage;
