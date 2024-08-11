import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

const Navbar = ({ show }) => {

    const router = useRouter();

    const variants = {
        hidden: { opacity: 0, y: -70 },
        visible: { opacity: 1, y: 0 },
    };

    return (

        <div className="navbar-wrapper">
            <motion.nav
                initial="hidden"
                animate={show ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.2 }}
            >
                <div className="navbar-container">
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="hero-wrapper"
                    >
                        <div className='navbar-icon' onClick={() => router.push('/')}>
                            <Image
                                className='back'
                                src="/assets/Profile_Black.png"
                                alt="ProfileBlack"
                                width={48}
                                height={48}
                                loading='eager'
                            />
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="about-wrapper"
                    >
                        <div className="navbar-item">
                            <span className="navbar-text">
                                About
                            </span>
                        </div>
                    </Link>
                    <div className='navbar-separator' />
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="projects-wrapper"
                    >
                        <div className="navbar-item">
                            <span className="navbar-text">
                                Portfolio
                            </span>
                        </div>
                    </Link>
                    <div className='navbar-separator' />
                    <div className="navbar-item" onClick={() => router.push('/blog')}>
                        <span className="navbar-text">
                            Blog
                        </span>
                    </div>
                    <div className='navbar-separator' />
                    <Link
                        activeClass="active"
                        smooth={true}
                        to="contact-wrapper"
                    >
                        <div className="navbar-item">
                            <span className="navbar-text">
                                Contact
                            </span>
                        </div>
                    </Link>
                </div>

            </motion.nav>
        </div>
    )
}

export default Navbar;