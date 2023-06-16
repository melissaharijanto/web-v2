import styled from 'styled-components';
import { Colors } from '../constants/colors';
import Links from './Links';
import { NORMAL_SPACE } from '../constants/constants';
import ProjectTab from './ProjectTab';
import { useState } from 'react';
import MainTechProjects from './tech-projects/MainTechProjects';
import OtherTechProjects from './tech-projects/OtherTechProjects';
import { SemiBoldText } from './TextComponents';
import ProjectViewNote from './ProjectViewNote';

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

const Profile = () => {
    const [viewTechProjects, setViewTechProjects] = useState(true);
    const [viewDesignProjects, setViewDesignProjects] = useState(false);
    const [mainSelected, setMainSelected] = useState(true);
    const [otherSelected, setOtherSelected] = useState(false);

    const techSelected = viewTechProjects && !viewDesignProjects;
    const designSelected = !viewTechProjects && viewDesignProjects;

    const selectViewDesignProjects = () => {
        setViewDesignProjects(true);
        setViewTechProjects(false);
    };

    const selectViewTechProjects = () => {
        setViewDesignProjects(false);
        setViewTechProjects(true);
    };

    const selectOtherProjects = () => {
        setMainSelected(false);
        setOtherSelected(true);
    };

    const selectMainProjects = () => {
        setMainSelected(true);
        setOtherSelected(false);
    };

    return (
        <ProfileContainer marginLeft="1em">
            <Links />
            <ProjectViewNote
                viewTechProjects={viewTechProjects}
                viewDesignProjects={viewDesignProjects}
                setViewTechProjects={selectViewTechProjects}
                setViewDesignProjects={selectViewDesignProjects}
            />
            {techSelected ? (
                <TextDiv>
                    <ProjectTab
                        mainSelected={mainSelected}
                        otherSelected={otherSelected}
                        selectMainProjects={selectMainProjects}
                        selectOtherProjects={selectOtherProjects}
                        headingOne="main projects"
                        headingTwo="other projects"
                    />
                </TextDiv>
            ) : designSelected ? (
                <TextDiv>
                    <ProjectTab
                        mainSelected={mainSelected}
                        otherSelected={otherSelected}
                        selectMainProjects={selectMainProjects}
                        selectOtherProjects={selectOtherProjects}
                        headingOne="graphics"
                        headingTwo="ui design/prototypes (figma)"
                    />
                </TextDiv>
            ) : null}
            <TextDiv />
            {techSelected ? (
                mainSelected ? (
                    <MainTechProjects />
                ) : otherSelected ? (
                    <OtherTechProjects />
                ) : null
            ) : null}

            {designSelected ? <SemiBoldText>coming soon</SemiBoldText> : null}
            <TextDiv />
        </ProfileContainer>
    );
};

export default Profile;
