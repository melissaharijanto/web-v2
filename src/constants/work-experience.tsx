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
        type: 'work internship',
        period: 'may 2023 - present',
        job_description: [
            'write test cases and conduct user acceptance testing for the fraud management system',
            'more to be added...',
        ],
    },
    {
        position: 'undergraduate teaching assistant',
        location: 'National University of Singapore',
        type: 'part-time',
        period: 'jan 2023 - may 2023',
        job_description: [
            'subject: cs2030s',
            'conduct weekly lab sessions for 14 students',
            'create powerpoint slides to aid in teaching',
            "grade assignments and give constructive comments for the students'future improvement",
        ],
    },
    {
        position: 'frontend-developer & ui/ux designer',
        location: "NUS Indonesian Students' Association (Remote)",
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
