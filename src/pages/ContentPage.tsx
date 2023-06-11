import styled from "styled-components";
import { IntroAndProjects } from "../components/Background";
import { Colors } from "../constants/colors";
import Profile from "../components/Profile";
import { BoldText } from "../components/TextComponents";

const ContentDiv = styled.div`
    width: 85%;
`

const ProfileContainer = styled.div<{marginLeft?: string ; marginRight?: string}>`
    background: linear-gradient(${Colors.purple}, transparent);
    border-radius: 20px;
    padding: 2em 3em 2em 3em;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: ${props => props.marginLeft? props.marginLeft : "2em"};
    margin-right: ${props => props.marginRight? props.marginRight : "2em"};
    display: flex;
    flex-direction: column;
`

const TextDiv = styled.div<{flexDirection?: string}>`
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: ${props => props.flexDirection? props.flexDirection : "column"};
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