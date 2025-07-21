const Footer = () => {
    return (
        <footer>
            
            <div id="rightfooter" style={{ textAlign: "center", padding: "0 20px" }}>
                <h3 >Follow me on</h3>
                <div id="social-media-footer" style={{marginRight: "2%"}}>
                <ul>
                    <li>
                    <a href="https://www.instagram.com/lespodsay">
                        <i className="fa-brands fa-instagram" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com/@lespodsay">
                        <i className="fa-brands fa-tiktok" />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.twitter.com/lespodsay">
                        <i className="fa-brands fa-x-twitter" />
                    </a>
                    </li>
                    <li>
                    <a href="https://cara.app/lespodsay">
                        Cara
                    </a>
                    </li>
                </ul>
                </div>
                <br />
                <p style={{ paddingBottom: "20px", margin:"auto", fontSize: "16px"}}>© Lespodsay, All Rights Reserved.</p>
            </div>
            </footer>
    );
}
 
export default Footer;