import styled from 'styled-components';
import { Colors } from '../constants/colors';
import ProjectComponent from './ProjectComponent';
import { BoldText, RegularText, SemiBoldText } from './TextComponents';
import { other_tech_projects, tech_projects } from '../constants/tech-projects';
import Links from './Links';
import { NORMAL_SPACE } from '../constants/constants';
import ProjectTab from './ProjectTab';
import { useState } from 'react';

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

export const TextDiv = styled.div<{ flexDirection?: string; display?: string }>`
    padding-top: 1em;
    padding-bottom: 1em;
    display: ${(props) => (props.display ? props.display : 'flex')};
    flex-direction: ${(props) =>
        props.display === 'flex' && props.flexDirection
            ? props.flexDirection
            : 'column'};
`;

const HorizontalScroll = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 1em;

    ::-webkit-scrollbar {
        height: 4px;
        color: #000;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        background: ${Colors.blue_25};
        border-radius: 10px;
    }
`;

const ProjectContainerWrapper = styled.div`
    display: inline-flex;
    width: 500px;
    margin: 3px 1em 1em 3px;
`;

const Profile = () => {
    const [mainSelected, setMainSelected] = useState(true);
    const [otherSelected, setOtherSelected] = useState(false);

    const selectOtherProjects = () => {
        setMainSelected(false);
        setOtherSelected(true);
    };

    const selectMainProjects = () => {
        setMainSelected(true);
        setOtherSelected(false);
    };

    const Note = () => (
        <TextDiv display="block">
            <SemiBoldText color={Colors.yellow}>note:</SemiBoldText>
            <SemiBoldText>
                {NORMAL_SPACE}you are currently viewing my{NORMAL_SPACE}
            </SemiBoldText>
            <SemiBoldText color={Colors.pink}>tech projects</SemiBoldText>
            <SemiBoldText>. click{NORMAL_SPACE}</SemiBoldText>
            <SemiBoldText color={Colors.blue} hover hoverColor={Colors.blue_75}>
                here
            </SemiBoldText>
            <SemiBoldText>
                {NORMAL_SPACE}to switch to my design projects.
            </SemiBoldText>
        </TextDiv>
    );

    const MainTechProjects = () => (
        <HorizontalScroll>
            {tech_projects.map((project) => (
                <ProjectContainerWrapper>
                    <ProjectComponent project={project} />
                </ProjectContainerWrapper>
            ))}
        </HorizontalScroll>
    );

    const OtherTechProjects = () => (
        <HorizontalScroll>
            {other_tech_projects.map((project) => (
                <ProjectContainerWrapper>
                    <ProjectComponent project={project} />
                </ProjectContainerWrapper>
            ))}
        </HorizontalScroll>
    );

    return (
        <ProfileContainer marginLeft="1em">
            <Links />
            <Note />
            <TextDiv>
                <ProjectTab
                    mainSelected={mainSelected}
                    otherSelected={otherSelected}
                    selectMainProjects={selectMainProjects}
                    selectOtherProjects={selectOtherProjects}
                />
            </TextDiv>
            <TextDiv />
            {mainSelected ? <MainTechProjects /> : null}
            {otherSelected ? <OtherTechProjects /> : null}
            <TextDiv />
        </ProfileContainer>
    );
};

export default Profile;
