import styled from 'styled-components';
import { IntroAndProjectsBackground } from '../components/Background';
import Profile from '../components/about-and-projects/Profile';


export const ContentDiv = styled.div`
    width: 85%;
`;

const IntroAndProjectsPage = () => {
    return (
        <IntroAndProjectsBackground>
            <ContentDiv>
                <Profile />
            </ContentDiv>
        </IntroAndProjectsBackground>
    );
};

export default IntroAndProjectsPage;
