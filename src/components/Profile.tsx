import styled from 'styled-components';
import { Colors } from '../constants/colors';
import Links from './Links';
import ProjectTab from './ProjectTab';
import { useState } from 'react';
import MainTechProjects from './tech-projects/MainTechProjects';
import OtherTechProjects from './tech-projects/OtherTechProjects';
import { SemiBoldText } from './TextComponents';
import ProjectViewNote from './ProjectViewNote';
import GraphicsGrid from './design-projects/GraphicsGrid';

export const Container = styled.div<{
    marginLeft?: string;
    marginRight?: string;
    gradientColor?: string;
}>`
    background: ${(props) =>
        props.gradientColor
            ? `linear-gradient(${props.gradientColor}, transparent)`
            : `linear-gradient(${Colors.purple}, transparent)`};
    border-radius: 20px;
    padding: 4em 5em 8em 5em;
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '2em')};
    margin-right: ${(props) => (props.marginRight ? props.marginRight : '2em')};
    display: flex;
    flex-direction: column;
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
    const [graphicsSelected, setGraphicsSelected] = useState(true);
    const [figmaSelected, setFigmaSelected] = useState(false);

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

    const selectGraphics = () => {
        setGraphicsSelected(true);
        setFigmaSelected(false);
    };

    const selectFigmaProjects = () => {
        setGraphicsSelected(false);
        setFigmaSelected(true);
    };

    return (
        <Container>
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
                        mainSelected={graphicsSelected}
                        otherSelected={figmaSelected}
                        selectMainProjects={selectGraphics}
                        selectOtherProjects={selectFigmaProjects}
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

            {designSelected ? (
                graphicsSelected ? (
                    <GraphicsGrid />
                ) : figmaSelected ? (
                    <SemiBoldText>coming soon</SemiBoldText>
                ) : null
            ) : null}
            <TextDiv />
        </Container>
    );
};

export default Profile;
