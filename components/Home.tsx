import Image from 'next/image'

const Home = () => {
    return (
        <div className="home-container">
            <div className='content-container'>

                <div className='header-container'>
                    <Image
                        src="/assets/Logo_6.png"
                        alt="Title"
                        layout="responsive"
                        width={2636}
                        height={746}
                        className='object-contain drop-shadow-md'
                    />
                </div>
             
                <div className='profile-container'>
                    <div className='profile-img-container'>
                        <Image
                            src="/assets/Profile_Circle.png"
                            alt="Profile"
                            fill={true}
                        />
                    </div>
                    <div className='greeting-container'>
                        <div className='message-container'>
                            <p className='-ml-4'>Hey There! My name is Justin, also known as, LevTheDev.</p>
                            <p className='ml-1'>I'm a passionate Software Engineer who loves bringing ideas to life.</p>
                            <p className='ml-3'>When I'm not working, you can find me enjoying various online games</p>
                            <p className='ml-1'>with friends or exploring one of my many project ideas. You can follow</p>
                            <p className='-ml-4'>the development of my projects as they progress on YouTube!</p>
                        </div>
                    </div>
                </div>

                <div className='socials-container'>
                    <div className='icon-container'>
                        <Image
                            src="/assets/socials/github.svg"
                            alt="Github"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/assets/socials/linkedin.svg"
                            alt="Linkedin"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/assets/socials/youtube.svg"
                            alt="YouTube"
                            fill={true}
                            className='github'
                        />
                    </div>
                    <div className='icon-container'>
                        <Image
                            src="/assets/socials/patreon.svg"
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