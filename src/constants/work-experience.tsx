export type Experience = {
    position: string;
    location: string;
    type: string;
    period: string;
    job_description: string[];
};

export const experiences: Experience[] = [
    {
        position: 'digital transformation intern',
        location: 'OCBC Bank',
        type: 'internship - full-time',
        period: 'may 2023 - present',
        job_description: [
            'write test cases and conduct user acceptance testing for a fraud management system',
            'conduct automated integration and unit testing with tricentis tosca',
            'write custom functions in vba excel to aid with analyzing downtime data of ocbc internal applications',
        ],
    },
    {
        position: 'undergraduate teaching assistant',
        location: 'National University of Singapore',
        type: 'part-time work',
        period: 'jan 2023 - may 2023',
        job_description: [
            'subjects taught: cs2030s (programming methodology II, object-oriented programming) and cs2103t (software engineering)',
        ],
    },
    {
        position: 'frontend-developer & ui/ux designer',
        location: "NUS Indonesian Students' Association",
        type: 'co-curricular activity',
        period: 'aug 2022 - present',
        job_description: [
            'participated in building a web forum for indonesian students in nus',
            'implement the frontend for the forum',
            'built a figma prototype of the site',
            'collaborated with 3 other frontend developers and a group of backend developers to build the application',
        ],
    },
];
