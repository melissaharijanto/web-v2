import PinusStudy from '../resources/images/pinus-study.png';
import GameRoom from '../resources/images/gameroom.png';
import TrackO from '../resources/images/track-o.png';
import TravelLog from '../resources/images/travel-log.png';
import Classroom360 from '../resources/images/classroom360.png';

export type TechProject = {
    name: string;
    desc: string;
    contribution: string[] | null;
    duration: string;
    role: string;
    tech_stack: string[];
    github: string | null;
    docs: string | null;
    backend: string | null;
    frontend: string | null;
    type: string;
    image: string;
    deployment: string | null;
}

export const tech_projects: TechProject[] = [{
    name: "pinus study",
    desc: "academic web forum for indonesian students in nus",
    contribution: ["frontend dev", "mobile responsiveness", "3d button design"],
    duration: "jan 2023 - present",
    role: "frontend developer & ui/ux designer",
    tech_stack: ["react.js", "typescript", "html", "css"],
    github: "https://github.com/PINUSTECH-2022/pinus-study-frontend",
    docs: null,
    backend: null, // use backend and frontend instead of github if two different repos
    frontend: null,
    type: "team project",
    image: PinusStudy,
    deployment: "https://https://pinus-study.netlify.app/",
}, {
    name: "gameroom",
    desc: "web forum for gamers; frontend design inspired by spotify",
    contribution: null,
    duration: "dec 2022 - jan 2023",
    role: "full-stack developer",
    tech_stack: ["react.js", "typescript", "html", "css", "ruby on rails"],
    github: null,
    docs: null,
    backend: "https://github.com/melissaharijanto/gameroom-backend", // use backend and frontend instead of github if two different repos
    frontend: "https://github.com/melissaharijanto/gameroom-frontend", 
    type: "individual project",
    image: GameRoom,
    deployment: "https://gameroom-forum.netlify.app/",
}, {
    name: "travelLog",
    desc: "travel itinerary planning android application",
    duration: "may 2022 - aug 2022",
    contribution: ["frontend dev", "google maps api integration", "firebase & firestore integration", "unit testing", "ui/ux design"],
    role: "full-stack developer",
    tech_stack: ["react native", "javascript", "firebase", "google maps api", "react native testing library", "jest"],
    github: "https://github.com/melissaharijanto/Travel-Log", 
    docs: "https://melissaharijanto.github.io/Travel-Log/",
    backend: null, // use backend and frontend instead of github if two different repos
    frontend: null, 
    type: "team project",
    image: TravelLog,
    deployment: "",
}]

export const other_tech_projects = [{
    name: "classroom360",
    contribution: [`ui with react360`],
    desc: "vr classroom with 360 degree view",
    duration: "may 2023 - may 2023",
    role: "ui developer",
    tech_stack: ["react360", "javascript", "docusaurus"],
    github: "https://github.com/melissaharijanto/pink-unicorn",
    docs: "https://pink-unicorn-documentation.vercel.app/",
    backend: null, // use backend and frontend instead of github if two different repos
    frontend: null, 
    type: "team project",
    image: Classroom360,
    deployment: "",
}, {
    name: "track-o",
    contribution: [`frontend dev with javafx`, `implement edit, list, find functionalities with java`, `documentation`],
    desc: "order and inventory tracking application",
    duration: "sep 2022 - nov 2022",
    role: "software engineer",
    tech_stack: ["java", "javafx"],
    github: "https://github.com/AY2223S1-CS2103T-W15-3/tp",
    docs: "https://ay2223s1-cs2103t-w15-3.github.io/tp/",
    backend: null, // use backend and frontend instead of github if two different repos
    frontend: null, 
    type: "team project",
    image: TrackO,
    deployment: "",
}]