import "./Sidebar.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaClinicMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BsSignIntersectionFill } from "react-icons/bs";
import { FaHackerNewsSquare } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHouseMedicalFlag } from "react-icons/fa6";
import { FaBlenderPhone } from "react-icons/fa";
import sidebarLogo from "../../assets/images/header img/header logo.jpg"
const Sidebar = ({ sidebar, setSidebar, language }) => {

    return (
        <div className={sidebar === true ? `sidebar active` : `sidebar`}>
            <div className="sidebar_header">
                <Link to="/">
                    <img className="sidebar_logo" src={sidebarLogo} alt="logo" />
                </Link>
                <button className="sidebar_close_icons">
                    <IoMdClose onClick={() => setSidebar(false)} />
                </button>
            </div>

            <nav className="sidebar_item">
                <Link
                    onClick={() => setSidebar(false)}
                    to="/"
                    className="sidebar_item_list"
                >
                    <FaClinicMedical className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Bosh sahifa" : "Главная"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/doctors"
                    className="sidebar_item_list"
                >
                    <FaUserDoctor className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Shifokorlar" : "Врачи"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/departaments"
                    className="sidebar_item_list"
                >
                    <BsSignIntersectionFill className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Bo'limlar" : "Отделы"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/news"
                    className="sidebar_item_list"
                >
                    <FaHackerNewsSquare className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Yangiliklar" : "Новости"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/workplace"
                    className="sidebar_item_list"
                >
                    <FaBriefcaseMedical className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Bo'sh ish o'rni" : "Вакансии"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/qvp"
                    className="sidebar_item_list"
                >
                    <FaHouseMedicalFlag className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "QVP" : "КВП"
                    }
                </Link>
                <Link
                    onClick={() => setSidebar(false)}
                    to="/contact"
                    className="sidebar_item_list"
                >
                    <FaBlenderPhone className="sidebar_list_icon" />
                    {
                        language === "UZ" ? "Aloqa" : "Контакты"
                    }
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar