<template>
    <footer>
    <div class="container">
        <div class="footer-top-msg-container">
            <div class="footer-info-container">
                <div class="footer-info">
                <h2>
                    C<i class="fas fa-virus"></i>VID<span>19</span>
                </h2>
                <p>This website is for health information and advice about coronavirus (COVID-19), how to prevent
                and protect yourself from disease.</p>
                <p>Learn about the government response to coronavirus on GOV.UK.</p>
                <div class="social-media-container">
                    <button type="button" class="btn btn-primary btn-lg">Facebook <i class="fa-brands fa-facebook"></i></button>
                    <button type="button" class="btn btn-primary btn-lg">Twitter <i class="fa-brands fa-twitter"></i></button>
                    <button type="button" class="btn btn-primary btn-lg">Instagram <i class="fa-brands fa-instagram"></i></button>
                </div>
            </div>
            <div class="links">
                <div class="footer-links">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="#about-corona">About Corona</a></li>
                        <li><a href="#symptoms">Symptoms</a></li>
                        <li><a href="#prevention">Prevention</a></li>
                        <li><a href="#dos-and-donts">Protect Yourself</a></li>
                        <li><a href="#faq">FAQs</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h5>Helpful links</h5>
                    <ul>
                        <li><a href="#header">Healthcare Professionals</a></li>
                        <li><a href="#header">Healthcare Facilities</a></li>
                        <li><a href="#header">Older Adults & Medical Conditions</a></li>
                        <li><a href="#header">Repair your Family</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h5>Important Links</h5>
                    <ul>
                        <li><a href="https://www.who.int/">WHO Website</a></li>
                        <li><a href="https://www.cdc.gov/">CDC Website</a></li>
                        <li><a href="#header">NHS Website</a></li>
                        <li><a href="#header">Harvard Health</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
</footer>
</template>

<style>
footer {
    background-image: url('../assets/shape-a.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0;
    color: white;
    background-color: #151c2e;
}
footer .footer-info-container {
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(247, 248, 255, 0.1);
    text-align: left;

}
footer .footer-info-container .footer-info {
    flex-basis: 100%;
    margin-bottom: 70px;
}
footer .footer-info-container .footer-info h2 {
    color: #fff;
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 20px;
}
footer .footer-info-container .footer-info h2 i {
    color: #FF5363;
}
footer .footer-info-container .footer-info h2 span {
    color: #4B6691;
}
footer .footer-info-container .footer-info p {
    color: #b2bfe0;
    line-height: 1.5em;
    margin-bottom: 20px
}
footer .footer-info-container .footer-info .social-media-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
footer .footer-info-container .footer-info .social-media-container button {
    width: 250px;
    height: 50px;
    margin: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-align: center;
    border: none;
}
footer .footer-info-container .footer-info .social-media-container button:nth-child(1) {
    background-color: #3b5999;
}
footer .footer-info-container .footer-info .social-media-container button:nth-child(2) {
     background-color: #55acee;
    }

footer .footer-info-container .footer-info .social-media-container button:nth-child(3) {
    background-color: #e4405f;
    }

footer .footer-info-container .links {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}
footer .footer-info-container .footer-links {
    flex-basis: 90%;
    margin: 0 auto;
}
footer .footer-info-container .footer-links h5 {
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
    letter-spacing: 0.1em;
}
footer .footer-info-container .footer-links ul li {
    list-style: none;
    margin-bottom: 20px;
}
footer .footer-info-container .footer-links ul li a {
    color: #b2bfe0;
    text-decoration: none;
}

@media (max-width: 950px) {
footer .footer-info-container .footer-info{
width: 50%;
}
}
</style>