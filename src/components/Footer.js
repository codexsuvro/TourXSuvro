import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travelo</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/suvrodeep.debnath">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/halogen.cfl">
                        <i class="fa-brands fa-instagram-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/codexsuvro">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/codexsuvro">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/codexsuvro">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="https://github.com/codexsuvro">Project</a>
                    <a href="https://twitter.com/codexsuvro">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="mailto:suvrodeepdebnath.official@gmail.com">Support</a>
                    <a href="mailto:suvrodeepdebnath.official@gmail.com">Troubleshhoting</a>
                    <a href="mailto:suvrodeepdebnath.official@gmail.com">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="last-text">
                <h3>CodexSuvro 2023 &copy; All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;