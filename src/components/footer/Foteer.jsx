import "./Footer.css"
import { Link } from "react-router-dom"
import footer_logo from "../../assets/images/footer img/footer_logo.png"
import location_img from "../../assets/images/footer img/footer_location.png"
import { FaLocationDot, FaGlobe } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Foteer = ({ language }) => {
    return (
        <div className="bg_Foteer">
            <div className="footer">
                <div className="footer_top">
                    <div className="footer_left">
                        <Link to="/"><img className="footer_logo" src={footer_logo} alt="footer_logo" /></Link>
                        <div className="location_text_div">
                            <p className="location_text_one"><FaLocationDot />
                                {
                                    language === "UZ" ? "Manzil" : "Адрес"
                                }
                            </p>
                            <p className="location_text_two">
                                {
                                    language === "UZ" ? "Samarqand viloyati Ishtixon tumani" : "Иштиханский район Самаркандской области"
                                }
                            </p>
                        </div>
                        <div className="footer_contact_div">
                            <p className="footer_contact_text_one"> <IoMdCall />
                                {
                                    language === "UZ" ? "Telefon" : "Tелефон"
                                }
                            </p>
                            <a className="footer_contact_href" href="tel:+998666291000"><p className="footer_contact_text_two">+998666291000</p></a>
                            <a className="footer_contact_href" href="tel:+998666291000"><p className="footer_contact_text_two">+998666291000</p></a>
                        </div>
                    </div>

                    <div className="footer_center">
                        <p className="footer_item_link">
                            {
                                language === "UZ" ? "Menu" : "Меню"
                            }
                        </p>
                        <Link className="footer_item_links" to="/">
                            {
                                language === "UZ" ? "Bosh sahifa" : "Главная"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/doctors">
                            {
                                language === "UZ" ? "Shifokorlar" : "Врачи"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/departaments">
                            {
                                language === "UZ" ? "Bo'limlar" : "Отделы"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/news">
                            {
                                language === "UZ" ? "Yangiliklar" : "Новости"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/workplace">
                            {
                                language === "UZ" ? "Bo'sh ish o'rni" : "Вакансии"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/qvp">
                            {
                                language === "UZ" ? "QVP" : "КВП"
                            }
                        </Link>
                        <Link className="footer_item_links" to="/contact">
                            {
                                language === "UZ" ? "Aloqa" : "Контакты"
                            }
                        </Link>
                    </div>

                    <div className="footer_right">
                        <a href="https://www.google.com/maps/place/Ishtihon+Tibbiyot+Markazi/@39.9716512,66.4825419,17z/data=!3m1!4b1!4m6!3m5!1s0x3f4d84f7f20799ed:0xd28b7d0e177c7009!8m2!3d39.9716472!4d66.4874128!16s%2Fg%2F11c55r6k8m?entry=tts">
                            <img className="footer_location_img" src={location_img} alt="location_img" />
                        </a>
                        <a className="location_text_href" href="https://www.ishtixonttb.uz">
                            <p className="footer_link"><FaGlobe />ishtixonttb.uz</p>
                        </a>
                        <p className="footer_right_text">
                            {
                                language === "UZ" ? "Bizni kuzatib boring!" : "Подписывайтесь на нас!"
                            }
                        </p>
                        <div className="footer_right_icons_div">
                            <a href="https://t.me/IshtixonTTBaxborotxizmati"><FaTelegram className="footer_icons" /></a>
                            <a href="https://www.facebook.com/Ishtixonttb?mibextid=ZbWKwL"><FaFacebook className="footer_icons" /></a>
                            <a href="mailto:aziz.khudayberdiev@ssv.uz"><MdEmail className="footer_icons" /></a>
                        </div>
                    </div>
                </div>
                <hr className="footer_hr" />
            </div>
        </div>
    )
}

export default Foteer