export type Data = {
    about: {
        [key in 'firstName' | 'lastName' | 'birthday']: string
    } & {
        [key in 'humanLanguages' | 'computerLanguages']: string[]
    }
    tech: {
        [key: string]: string[]
    }
    education: {
        time: {
            [key in 'from' | 'to']: number
        }
        school: string
        course: string
        classes: string[]
    }
}

export const portfolioData: Data = {
    about: {
        firstName: 'Thomas',
        lastName: 'Jensen',
        birthday: '10-12-2003',
        humanLanguages: ['English', 'Norwegian', 'German', 'Hebrew'],
        computerLanguages: ['Typescript', 'Go', 'Swift', 'Rust'],
    },
    tech: {
        languages: [
            'Typescript',
            'Javascript',
            'HTML',
            'CSS',
            'Go',
            'Swift',
            'Rust',
        ],
        technologies: [
            'React.js',
            'Express',
            'Node.js',
            'PostgreSQL',
            'TailwindCSS',
            'Linux',
        ],
    },
    education: {
        time: {
            from: 2020,
            to: 2022,
        },
        school: 'Arendal High School',
        course: 'International Baccaleureate',
        classes: [
            'Physics HL',
            'Mathematics AA SL',
            'Chemistry HL',
            'Global Politics SL',
            'Norwegian HL',
            'English SL',
        ],
    },
}
