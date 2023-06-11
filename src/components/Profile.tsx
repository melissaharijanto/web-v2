import styled from 'styled-components';
import { Colors } from '../constants/colors';
import { emailMe, toGithub, toLinkedIn, toResume } from '../constants/links';
import { SPACER } from '../constants/constants';
import ProjectComponent from './ProjectComponent';
import { BoldText, SemiBoldText } from './TextComponents';
import { tech_projects } from '../constants/tech-projects';

const ProfileContainer = styled.div<{
    marginLeft?: string;
    marginRight?: string;
}>`
    background: linear-gradient(${Colors.purple}, transparent);
    border-radius: 20px;
    padding: 4em 5em 4em 5em;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '2em')};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : '2em')};
    display: flex;
    flex-direction: column;
    overflow-x: auto;
`;

const TextDiv = styled.div<{ flexDirection?: string }>`
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    flex-direction: ${(props) =>
        props.flexDirection ? props.flexDirection : 'column'};
`;

const HorizontalScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    white-space: nowrap;

    ::-webkit-scrollbar{
        height: 4px;
        color: #000;
    }

    ::-webkit-scrollbar-thumb:horizontal{
        background: ${Colors.blue_50};
        border-radius: 10px;
    }
`

const ProjectContainerWrapper = styled.div`
        display: inline-flex;
        width: 500px;
        margin: 3px 1em 1em 3px;
`

const Profile = () => {
    return (
        <ProfileContainer marginLeft="1em">
            <TextDiv>
                <BoldText fontSize="2.5em">about</BoldText>
            </TextDiv>
            <TextDiv />
            <TextDiv>
                <BoldText
                    marginBottom="0.25em"
                    fontSize="3.5em"
                    color={Colors.yellow}>
                    good to see you here.
                </BoldText>
                <SemiBoldText marginBottom="1em" fontSize="1em" lineHeight="1.5" textAlign="justify">
                    my name is melissa, and my passion for web development started when i learnt basic HTML and CSS when i was 14,
                    driven by my hobby of graphic design. afterwards, i learnt that web development involves more
                    than just designing, but it only increases my enthusiasm in it as there is so much to learn. 
                    i enjoy applying the things i learnt to the projects i make or participate in.
                </SemiBoldText>
                <SemiBoldText fontSize="1.25em">
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toGithub}>
                        github
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toLinkedIn}>
                        linkedin
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toResume}>
                        resume
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={emailMe}>
                        email
                    </SemiBoldText>
                </SemiBoldText>
            </TextDiv>
            <TextDiv />
            <TextDiv>
                <BoldText fontSize="2.5em" marginBottom='0.5em'>main projects</BoldText>
            </TextDiv>
            <HorizontalScroll>
            {
                tech_projects.map((project) => (
                    <ProjectContainerWrapper>
                        <ProjectComponent project={project}/>
                    </ProjectContainerWrapper>
                ))
            }
            </HorizontalScroll>
            <TextDiv />
            <TextDiv>
                <BoldText fontSize="2.5em" marginBottom='0.5em'>others</BoldText>
            </TextDiv>
        </ProfileContainer>
    );
};

export default Profile;
