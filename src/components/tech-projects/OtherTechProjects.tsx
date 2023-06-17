import { other_tech_projects } from '../../constants/tech-projects';
import ProjectComponent from '../about-and-projects/ProjectComponent';

import {
    HorizontalScroll,
    ProjectContainerWrapper,
} from './TechProjectComponents';

const OtherTechProjects = () => (
    <HorizontalScroll>
        {other_tech_projects.map((project) => (
            <ProjectContainerWrapper>
                <ProjectComponent project={project} />
            </ProjectContainerWrapper>
        ))}
    </HorizontalScroll>
);

export default OtherTechProjects;
