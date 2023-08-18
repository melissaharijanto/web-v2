import styled from 'styled-components';
import Links from './Links';
import ProjectTab from './ProjectTab';
import { useState } from 'react';
import ProjectViewNote from './ProjectViewNote';
import GraphicsGrid from '../design-projects/GraphicsGrid';
import { SemiBoldText } from '../TextComponents';
import MainTechProjects from '../tech-projects/MainTechProjects';
import OtherTechProjects from '../tech-projects/OtherTechProjects';
import { Colors } from '../../constants/colors';
import { screens } from '../../constants/constants';

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
  padding: 2em 2.5em 4em 2.5em;
  margin-top: 10em;
  margin-bottom: 2em;
  margin-left: 1em;
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  ${screens.lg} {
    padding: 6em 7.5em 10em 7.5em;
    margin: 10em 3em 2em 3em;
  }
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

      {techSelected ? (
        mainSelected ? (
          <>
            <TextDiv />
            <MainTechProjects />
          </>
        ) : otherSelected ? (
          <>
            <TextDiv />
            <OtherTechProjects />
          </>
        ) : null
      ) : null}

      {designSelected ? (
        graphicsSelected ? (
          <GraphicsGrid />
        ) : figmaSelected ? (
          <SemiBoldText
            italic
            textAlign="center"
            fontSize="1.5em"
            color={Colors.yellow}
            mobileFontSize='0.75em'>
            coming soon
          </SemiBoldText>
        ) : null
      ) : null}
      <TextDiv />
    </Container>
  );
};

export default Profile;
