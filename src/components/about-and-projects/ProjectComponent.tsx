import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { TechProject } from '../../constants/tech-projects';
import { BoldText, SemiBoldText } from '../TextComponents';
import { redirect } from '../../constants/utils';
import { EN_SPACER, SPACER, screens } from '../../constants/constants';
import { useState } from 'react';
import ProjectDescriptionModal from './ProjectDescriptionModal';

const ProjectContainer = styled.div`
    background: linear-gradient(${Colors.pink_75}, transparent);
    padding: 1em;
    border-radius: 20px;
    display: inline-block;
    width: 100%;
    ${screens.lg} {
        width: 500px;
        padding: 1.5em;
    }
    white-space: pre-wrap;

    &:hover {
        background: linear-gradient(${Colors.yellow_75}, transparent);
        cursor: pointer;
        box-shadow: 0 0 0 2px ${Colors.white_75};
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    margin-bottom: 1em;
    border-radius: 10px;
`;

const TextDiv = styled.div<{ flexDirection?: string; alignItems?: string }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    white-space: normal;
    align-items: ${(props) =>
        props.alignItems ? props.alignItems : 'flex-start'};
    margin-bottom: 1em;
    ${screens.lg} {
        flex-direction: row;
        margin-bottom: 0;
    }
`;

const VerticalAlign = styled.div`
    display: flex;
    flex-direction: column;
`

const ProjectComponent = ({ project }: { project: TechProject }) => {
    const [showDescription, setShowDescription] = useState(false);

    const frontendExists = project.frontend != null;
    const backendExists = project.backend != null;
    const githubExists = project.github != null;
    const docsExists = project.docs != null;
    const frontendDoesntExist = project.frontend == null;
    const backendDoesntExist = project.backend == null;
    const githubDoesntExist = project.github == null;
    const docsDoesntExist = project.docs == null;

    const frontendAndBackendOnly =
        frontendExists && backendExists && githubDoesntExist && docsDoesntExist;
    const oneRepoOnlyAndDocs =
        githubExists && docsExists && frontendDoesntExist && backendDoesntExist;
    const githubOnly =
        githubExists &&
        frontendDoesntExist &&
        backendDoesntExist &&
        docsDoesntExist;

    const displayProjectDetails = () => {
        setShowDescription(true);
    };

    const closeProjectDetails = () => {
        setShowDescription(false);
    };

    const FrontendAndBackendOnlyComponent = () => (
        <SemiBoldText>
            <SemiBoldText
                hover
                color={Colors.blue}
                onClick={() => redirect(project.frontend as string)}>
                frontend
            </SemiBoldText>
            <SemiBoldText>{SPACER}</SemiBoldText>
            <SemiBoldText
                hover
                color={Colors.blue}
                onClick={() => redirect(project.backend as string)}>
                backend
            </SemiBoldText>
        </SemiBoldText>
    );

    const OneRepoOnlyAndDocsComponent = () => (
        <SemiBoldText>
            <SemiBoldText
                hover
                color={Colors.blue}
                onClick={() => redirect(project.github as string)}>
                github
            </SemiBoldText>
            <SemiBoldText>{SPACER}</SemiBoldText>
            <SemiBoldText
                hover
                color={Colors.blue}
                onClick={() => redirect(project.docs as string)}>
                docs
            </SemiBoldText>
        </SemiBoldText>
    );

    const GithubOnlyComponent = () => (
        <SemiBoldText
            hover
            color={Colors.blue}
            onClick={() => redirect(project.github as string)}
            >
            github
        </SemiBoldText>
    );

    return (
        <>
        {showDescription ? (
                <ProjectDescriptionModal
                    project={project}
                    closeModal={closeProjectDetails}
                />
            ) : null}
        <ProjectContainer onClick={displayProjectDetails}>
            <ProjectImage src={project.image} />
            <VerticalAlign>
                <TextDiv alignItems="center">
                    <BoldText
                        fontSize="2.25em"
                        color={Colors.yellow}
                        marginBottom="0.25em"
                        mobileFontSize='1.5em'>
                        {project.name}
                    </BoldText>
                    <SemiBoldText italic marginBottom="0.5em" mobileFontSize='0.75em'>
                        {EN_SPACER}( {project.duration} )
                    </SemiBoldText>
                </TextDiv>
                <SemiBoldText marginBottom="0.5em" mobileFontSize='0.75em'>
                    {project.type.concat(SPACER).concat(project.role)}
                </SemiBoldText>
                <SemiBoldText marginBottom="0.5em" mobileFontSize='0.75em'>
                    {' '}
                    links:{EN_SPACER}
                    {frontendAndBackendOnly ? (
                        <FrontendAndBackendOnlyComponent />
                    ) : oneRepoOnlyAndDocs ? (
                        <OneRepoOnlyAndDocsComponent />
                    ) : githubOnly ? (
                        <GithubOnlyComponent />
                    ) : null}
                </SemiBoldText>
            </VerticalAlign>
        </ProjectContainer>
        </>
    );
};

export default ProjectComponent;
