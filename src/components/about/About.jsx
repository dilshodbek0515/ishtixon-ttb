import "./About.css"
import about from "../../assets/images/about img/about img.jpg"
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const About = ({ language }) => {
    return (
        <div className="about_content">
            <div className="About">
                <img className="about_img" src={about} alt="about" />
                <div className="about_right_content">
                    <p className="about_text_one">
                        {
                            language === "UZ" ? "Biz haqimizda" : "О нас"
                        }
                    </p>
                    <p className="about_line"></p>
                    <p className="about_text_two">
                        {
                            language === "UZ"
                                ?
                                "BIZNING MAQSADIMIZ - SIZNING SALOMATLIGINGIZ! HAR BIR FUQARONING SOG`LIGI BIZ UCHUN MUHIM! O`zbekiston Respublikasi Samarqand viloyati Ishtixon tuman Tibbiyot Birlashmasi Web sahifasiga Xush kelibsiz!"
                                : "НАША ЦЕЛЬ — ВАШЕ ЗДОРОВЬЕ! НАМ ВАЖНО ЗДОРОВЬЕ КАЖДОГО ГРАЖДАНИНА! Добро пожаловать на сайт Иштихонское районного медицинского объединения Самаркандской области Республики Узбекистан!"
                        }
                    </p>
                    <div className="about_icons_content">
                        <a href="https://t.me/IshtixonTTBaxborotxizmati"><FaTelegram className="about_icon" /></a>
                        <a href="https://www.facebook.com/Ishtixonttb?mibextid=ZbWKwL"><FaFacebook className="about_icon" /></a>
                        <a href="mailto:aziz.khudayberdiev@ssv.uz"><MdEmail className="about_icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About