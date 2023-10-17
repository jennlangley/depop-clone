import './Footer.css';
const Footer = () => {

    return (
        <footer className="footer">
            <div>
                <a target="_blank" className='about-links' href="https://github.com/jennlangley/style-swap">
                    <i className="fa-brands fa-square-github" />
                </a>
            </div>
            <div>
                <a target="_blank" className='about-links' href="https://www.linkedin.com/in/jennifer-langley/">
                    <i className="fa-brands fa-linkedin" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;