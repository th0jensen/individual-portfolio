import { TypeAnimation } from 'react-type-animation'
import { portfolioData as data } from '../../data'
import LangList from './components/LangList'
import SocialButton from './components/SocialButton'

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
            <img
                className='fixed left-0 top-0 z-0 h-screen w-screen'
                src={
                    'https://images.unsplash.com/photo-1662473991701-c69c3b6bf6fb?q=80&w=3293&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
            />
            <div
                id='about-me'
                className='text-primary container z-10 flex h-screen max-w-xl flex-col justify-center gap-10 px-10 pt-24 text-3xl font-bold'
            >
                <div
                    className='z-20 flex max-w-xl flex-col gap-10 rounded-2xl p-10 backdrop-blur-2xl'
                    style={{
                        boxShadow:
                            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}
                >
                    <TypeAnimation
                        sequence={sequence}
                        wrapper='h1'
                        speed={50}
                        className='text-4xl font-bold'
                        repeat={Infinity}
                    />
                    <div className=''>
                        <p>
                            i am{' '}
                            <span className='bg-black px-4 py-1 text-white'>
                                {data.about.firstName} {data.about.lastName}
                            </span>{' '}
                            a {calculateAge()} year old software developer
                            passionate about systems engineering and
                            optimisation.
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
                <div
                    className='col z-20 flex max-w-xl flex-col gap-5 rounded-2xl p-10 backdrop-blur-2xl'
                    style={{
                        boxShadow:
                            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}
                >
                    <h1 className='flex-row text-4xl font-bold'>socials</h1>
                    <div className='flex gap-5'>
                        <SocialButton
                            social='github'
                            link={'https://www.github.com/th0jensen'}
                        />
                        <SocialButton
                            social='linkedin'
                            link={
                                'https://www.linkedin.com/in/thomas-jensen-75a488208/'
                            }
                        />
                        <SocialButton
                            social='instagram'
                            link={'https://www.instagram.com/baecien'}
                        />
                    </div>
                </div>
            </div>
            <img
                className='fixed bottom-0 right-0 z-10 hidden max-h-full max-w-xl md:block xl:max-h-screen xl:max-w-full'
                src='https://github.com/th0jensen/individual-portfolio/blob/main/src/assets/thomas_face_upscaled.png?raw=true'
                alt='my face'
            />
        </div>
    )
}
