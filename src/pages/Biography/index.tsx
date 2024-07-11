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
            className='container max-w-xl px-10 text-3xl font-bold text-primary flex flex-col justify-center'
        >
            <h1 className='text-4xl font-bold'>hiya!</h1>
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
        </div>
    )
}
