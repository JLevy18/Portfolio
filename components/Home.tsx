import Image from 'next/image'

const Home = () => {
    return (
        <div className="home-container">
            <div className='content-container'>

                <div className='header-container'>
                    <Image
                        src="/Logo_6.png"
                        alt="Title"
                        fill={true}
                    />
                </div>

                <div className='profile-container'>
                    <div className='profile-img-container'>
                        <Image
                            src="/Profile_Circle.png"
                            alt="Profile"
                            fill={true}
                        />
                    </div>
                    <div className='greeting-container'>
                        <p>Hey There! I'm Justin, aka, LevTheDev.</p>
                        <p>Hey There! I'm Justin, aka, LevTheDev.</p>
                        <p>Hey There! I'm Justin, aka, LevTheDev.</p>
                        <p>Hey There! I'm Justin, aka, LevTheDev.</p>
                    </div>
                </div>

                <div className='socials-container'>
                    <div className='icon-container'>
                        <Image
                            src="/socials/github.svg"
                            alt="Github"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/socials/linkedin.svg"
                            alt="Linkedin"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/socials/youtube.svg"
                            alt="YouTube"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/socials/patreon.svg"
                            alt="Patreon"
                            fill={true}
                            className='github'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;