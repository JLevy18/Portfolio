import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const Hero = () => {

    const profileImgConfig = useAnimation();
    const messageConfig = useAnimation();
    const socialsConfig = useAnimation();

    const messageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    const socialVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                opacity: { duration: 0.5, ease: "easeInOut" },
            }
        }
    };

    useEffect(() => {

        async function onLoadSequence() {

            await Promise.all([
                profileImgConfig.start({
                    scale: 1,
                    transition: { type: "spring", stiffness: 300, damping: 20, mass: 1 }
                }),
            ])

            await Promise.all([

                profileImgConfig.start({
                    x: 0,
                    rotateZ: -360,
                    transition: { duration: 1, ease: "easeInOut" }
                }),

                setTimeout(() => {
                    messageConfig.start("visible");
                }, 700)
            ])

            await Promise.all([
                profileImgConfig.start({
                    x: 0,
                    rotateY: -180,
                    transition: { duration: 0.5, ease: "easeOut" }
                }),        
                socialsConfig.start("visible")

            ])

        }

        onLoadSequence()
    }, [profileImgConfig, messageConfig, socialsConfig]);


    return (
        <div className="hero-wrapper">
            <div className='content-container'>

                <div className='header-container'>
                    <Image
                        src="/assets/Header.png"
                        alt="Title"
                        width={2636}
                        height={746}
                        loading='eager'
                        className='object-contain drop-shadow-md'
                    />
                </div>

                <div className='profile-container'>
                    <div className='profile-img-container'>
                            <motion.div
                                className='animate-flip'
                                initial={{ rotateY: 0, scale: 0, x: '120%' }}
                                animate={profileImgConfig}
                            >
                                <Image
                                    className='front'
                                    src="/assets/Profile_Front.png"
                                    alt="ProfileFront"
                                    fill={true}
                                    loading='eager'
                                />
                                <Image
                                    className='back'
                                    src="/assets/Profile_Back.png"
                                    alt="ProfileBack"
                                    fill={true}
                                    loading='eager'
                                />
                            </motion.div>
                    </div>
                    <div className='greeting-container'>
                        <motion.ul
                            className='message-container'
                            initial="hidden"
                            animate={messageConfig}
                            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                        >
                            <motion.li variants={messageVariants} className='-ml-4 message-line'>Hey There! My name is Justin, also known as, LevTheDev.</motion.li>
                            <motion.li variants={messageVariants} className='ml-1 message-line'>I'm a passionate Software Engineer who loves bringing ideas to life.</motion.li>
                            <motion.li variants={messageVariants} className='ml-3 message-line'>When I'm not working, you can find me enjoying various online games</motion.li>
                            <motion.li variants={messageVariants} className='ml-1 message-line'>with friends or exploring one of my many project ideas. You can follow</motion.li>
                            <motion.li variants={messageVariants} className='-ml-4 message-line'>the development of my projects as they progress on YouTube!</motion.li>
                        </motion.ul>
                    </div>
                </div>

                <motion.ul
                    className='socials-container'
                    initial="hidden"
                    animate={socialsConfig}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.25,
                            }
                        }
                    }}

                >
                    <motion.li variants={socialVariants} className='icon-container' onClick={() => { window.open('https://www.github.com/JLevy18', "_blank") }}>
                        <Image
                            src="/assets/socials/github.svg"
                            alt="Github"
                            fill={true}
                            className='github'
                        />
                    </motion.li>
                    <motion.li variants={socialVariants} className='icon-container' onClick={() => { window.open('https://www.linkedin.com/in/jlevy18/', "_blank") }}>
                        <Image
                            src="/assets/socials/linkedin.svg"
                            alt="Linkedin"
                            fill={true}
                            className='github'
                        />
                    </motion.li>
                    <motion.li variants={socialVariants} className='icon-container' onClick={() => { window.open('https://www.youtube.com/channel/UCm3dXeDpEoPABhIPs9EkBrg', "_blank") }}>
                        <Image
                            src="/assets/socials/youtube.svg"
                            alt="YouTube"
                            fill={true}
                            className='github'
                        />
                    </motion.li>
                    <motion.li variants={socialVariants} className='icon-container' onClick={() => { window.open('https://www.patreon.com/LevTheDev', "_blank") }}>
                        <Image
                            src="/assets/socials/patreon.svg"
                            alt="Patreon"
                            fill={true}
                            className='github'
                        />
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}

export default Hero;