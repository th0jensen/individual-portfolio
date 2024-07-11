import { TypeAnimation } from 'react-type-animation'
import { portfolioData as data } from '../../data'

export default function Biography() {
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
        <div
            id='about-me'
            className='container h-screen max-w-xl px-10 text-3xl font-bold text-primary flex flex-col justify-center'
        >
            <TypeAnimation
                sequence={[
                    'hiya!',
                    3000,
                    '!שלום',
                    3000,
                    'hallo!',
                    3000,
                    'hei!',
                    3000,
                ]}
                wrapper='h1'
                speed={50}
                className='text-4xl font-bold'
                repeat={Infinity}
            />
            <br />
            <div>
                <p>
                    im{' '}
                    <span className='bg-black text-white px-4 py-1'>
                        {data.about.firstName} {data.about.lastName}
                    </span>{' '}
                    a {calculateAge()} year old software developer passionate
                    about systems engineering and optimisation.
                </p>
            </div>
            <br />
            <div className='text-sm'>
                <p>
                    human languages:{' '}
                    {data.about.languages.map((lang, index) => {
                        if (index < data.about.languages.length - 1) {
                            return lang.toLowerCase() + ', '
                        } else {
                            return lang.toLowerCase()
                        }
                    })}
                </p>
                <p>
                    computer languages:{' '}
                    {data.tech.map((lang, index) => {
                        if (index < data.tech.length - 1) {
                            return lang.toLowerCase() + ', '
                        } else {
                            return lang.toLowerCase()
                        }
                    })}
                </p>
            </div>
        </div>
    )
}
