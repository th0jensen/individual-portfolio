type Data = {
    name: {
        [key in 'first' | 'last' | 'birthday']: string
    }
    tech: string[]
    education: {
        time: {
            [key in 'from' | 'to']: number
        }
        school: string
        course: string
        classes: string[]
    }
}

const data: Data = {
    name: {
        first: 'Thomas',
        last: 'Jensen',
        birthday: '10-12-2003',
    },
    tech: ['Typescript', 'Javascript', 'HTML & CSS', 'Swift', 'Go', 'Bash'],
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

export default data
