import styled from "styled-components";
import { IntroAndProjects } from "../components/Background";
import Profile from "../components/Profile";

const ContentDiv = styled.div`
    width: 85%;
`

const ContentPage = () => {
    
    return (
        <IntroAndProjects>
            <ContentDiv>
                <Profile/>
            </ContentDiv>
        </IntroAndProjects>
    )
}

export default ContentPage;