const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-wrapper">
            <div className='copyright'>&copy; Copyright {currentYear} | LevTheDev</div>
        </div>
    )
}
export default Footer;