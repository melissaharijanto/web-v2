import styled from "styled-components";
import { IntroAndProjects } from "../components/Background";
import { Colors } from "../constants/colors";
import Profile from "../components/Profile";
import { BoldText } from "../components/TextComponents";

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr;
    width: 100%;
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
            <ContentGrid>
                <ProfileContainer marginRight="1em">
                    <TextDiv>
                        <BoldText fontSize="1.25em">you are now viewing:</BoldText>
                    </TextDiv>
                </ProfileContainer>
                <Profile/>
            </ContentGrid>
        </IntroAndProjects>
    )
}

export default ContentPage;