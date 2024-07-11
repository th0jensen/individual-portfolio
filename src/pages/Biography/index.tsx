import { TypeAnimation } from 'react-type-animation'
import { portfolioData as data } from '../../data'
import LangList from './components/LangList'

export default function Biography() {
    const sequence = [
        'hiya!',
        3000,
        '!שלום',
        3000,
        'hallo!',
        3000,
        'hei!',
        3000,
    ]

    const calculateAge = (): string => {
        const [month, day, year] = data.about.birthday.split('-').map(Number)
        const birthDate = new Date(year, month - 1, day)
        const today = new Date()

        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDiff = today.getMonth() - birthDate.getMonth()
        const dayDiff = today.getDate() - birthDate.getDate()

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--
        }

        return age.toString()
    }

    return (
        <div className='flex h-screen w-screen flex-col'>
            <div
                id='about-me'
                className='text-primary container flex h-screen max-w-xl flex-col justify-center gap-10 px-10 text-3xl font-bold'
            >
                <TypeAnimation
                    sequence={sequence}
                    wrapper='h1'
                    speed={50}
                    className='text-4xl font-bold'
                    repeat={Infinity}
                />
                <div>
                    <p>
                        i am{' '}
                        <span className='bg-black px-4 py-1 text-white'>
                            {data.about.firstName} {data.about.lastName}
                        </span>{' '}
                        a {calculateAge()} year old software developer
                        passionate about systems engineering and optimisation.
                    </p>
                </div>
                <div className='text-sm'>
                    <LangList
                        label='human languages'
                        data={data.about.humanLanguages}
                    />
                    <LangList
                        label='computer languages'
                        data={data.about.computerLanguages}
                    />
                </div>
            </div>
            <div className='container right-0 flex w-screen justify-end xl:absolute'>
                <img
                    className='max-w-screen max-h-full xl:max-h-screen xl:max-w-full'
                    src='src/assets/thomas_face.png'
                    alt='my face'
                />
            </div>
        </div>
    )
}
