import "./Links.css"
import link_img from "../../assets/images/link img/link img.png"
const Links = ({ language }) => {
    return (
        <div className="links_content">
            <p className="links_top_text">
                {
                    language === "UZ" ? "Foydali saytlar" : "Полезные сайты"
                }
            </p>
            <p className="links_top_line"></p>
            <div className="Links">
                <a href="https://president.uz/oz">
                    <div className="links_card">
                        <img src={link_img} alt="img" className="links_img" />
                        <div className="link_bottom_cards">
                            {
                                language === "UZ" ? " Президент Республики Узбекистан" : " Президент Республики Узбекистан"
                            }
                        </div>
                    </div>
                </a>
                <a href="https://president.uz/oz">
                    <div className="links_card">
                        <img src={link_img} alt="img" className="links_img" />
                        <div className="link_bottom_cards">
                            {
                                language === "UZ" ? " Президент Республики Узбекистан" : " Президент Республики Узбекистан"
                            }
                        </div>
                    </div>
                </a>
                <a href="https://president.uz/oz">
                    <div className="links_card">
                        <img src={link_img} alt="img" className="links_img" />
                        <div className="link_bottom_cards">
                            {
                                language === "UZ" ? " Президент Республики Узбекистан" : " Президент Республики Узбекистан"
                            }
                        </div>
                    </div>
                </a>
                <a href="https://president.uz/oz">
                    <div className="links_card">
                        <img src={link_img} alt="img" className="links_img" />
                        <div className="link_bottom_cards">
                            {
                                language === "UZ" ? " Президент Республики Узбекистан" : " Президент Республики Узбекистан"
                            }
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Links