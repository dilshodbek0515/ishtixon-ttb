import "./Header.css"
import { Link } from "react-router-dom"
import headerLogo from "../../assets/images/header img/header logo.jpg"
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
const Header = ({ setlanguage, language, setSidebar }) => {
    return (
        <div className="container">
            <header className="header">
                <Link to="/"><img className="header_logo" src={headerLogo} alt="header_logo" /></Link>
                <nav className="header_navbar">
                    <Link className="item_link" to="/">
                        {
                            language === "UZ" ? "Bosh sahifa" : "Главная"
                        }
                    </Link>
                    <Link className="item_link" to="/doctors">
                        {
                            language === "UZ" ? "Shifokorlar" : "Врачи"
                        }
                    </Link>
                    <Link className="item_link" to="/departaments">
                        {
                            language === "UZ" ? "Bo'limlar" : "Отделы"
                        }
                    </Link>
                    <Link className="item_link" to="/news">
                        {
                            language === "UZ" ? "Yangiliklar" : "Новости"
                        }
                    </Link>
                    <Link className="item_link" to="/workplace">
                        {
                            language === "UZ" ? "Bo'sh ish o'rni" : "Вакансии"
                        }
                    </Link>
                    <Link className="item_link" to="/qvp">
                        {
                            language === "UZ" ? "QVP" : "КВП"
                        }
                    </Link>
                    <Link className="item_link" to="/contact">
                        {
                            language === "UZ" ? "Aloqa" : "Контакты"
                        }
                    </Link>
                </nav>
                <button className="language">
                    <div className="language_content">{language}
                        <IoMdArrowDropdown className="language_icon" />
                    </div>
                    <div className="language_ru">
                        <p className="langu" onClick={() => setlanguage("UZ")}>UZ</p>
                        <p className="langu" onClick={() => setlanguage("RU")}>RU</p>
                    </div>
                </button>
                <CgMenuGridR className="header_menu" onClick={() => setSidebar(true)} />
            </header>
        </div>
    )
}

export default Header