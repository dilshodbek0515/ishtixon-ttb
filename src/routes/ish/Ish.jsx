import "./Ish.css"
import ish_img from "../../assets/images/ish img/ish img.png"
import { FaRegClock } from "react-icons/fa";
const Ish = ({ language }) => {
    return (
        <div className="ish_urni_content">
            <div className="ish">
                <p className="ish_text">
                    {
                        language === "UZ" ? "Bo'sh ish o'rni" : "Вакансии"
                    }
                </p>
                <div className="ish_card_content">
                    <div className="ish_urni_card">
                        <div className="ish_left_content">
                            <p className="ish_left_text1">
                                {
                                    language === "UZ" ? "  Bo'sh ish o'rin nomi:" : "Название вакансии:"
                                }
                                <span className="ish_left_span1">
                                    {
                                        language === "UZ" ? "Vrach xirurg" : "Врач хирург"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Shtat:" : "Штат:"
                                }
                                <span className="ish_left_span">
                                    0,25
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Ma'lumoti:" : "Информация:"
                                }
                                <span className="ish_left_span">
                                    Oliy
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Talab etiladigan ish tajribasi:" : "Требуемый опыт работы:"
                                }
                                <span className="ish_left_span">
                                    {
                                        language === "UZ" ? "1 yildan 2 yilgacha" : "От 1 до 2 лет"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Maosh:" : "Зарплата:"
                                }
                                <span className="ish_left_span">
                                    {
                                        language === "UZ" ? "804 204 so'm" : "804 204 сўм"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Aloqa: +998666291000" : "Контакты: + 998666291000"
                                }
                            </p>
                        </div>

                        <div className="ish_right_content">
                            <img className="ish_right_img" src={ish_img} alt="ish_right_img" />
                            <p className="ish_right_text"><FaRegClock className="ish_data_icons" />2024-03-10</p>
                        </div>
                    </div>

                    <div className="ish_urni_card">
                        <div className="ish_left_content">
                            <p className="ish_left_text1">
                                {
                                    language === "UZ" ? "  Bo'sh ish o'rin nomi:" : "Название вакансии:"
                                }
                                <span className="ish_left_span1">
                                    {
                                        language === "UZ" ? " Operatsiya hamshira" : "Операция ҳамшира"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Shtat:" : "Штат:"
                                }
                                <span className="ish_left_span">
                                    0,75
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Ma'lumoti:" : "Информация:"
                                }
                                <span className="ish_left_span">
                                    {
                                        language === "UZ" ? "O'rta maxsus" : "Середина"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Talab etiladigan ish tajribasi:" : "Требуемый опыт работы:"
                                }
                                <span className="ish_left_span">
                                    {
                                        language === "UZ" ? "1 yildan 2 yilgacha" : "От 1 до 2 лет"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Maosh:" : "Зарплата:"
                                }
                                <span className="ish_left_span">
                                    {
                                        language === "UZ" ? "1 722 776 so'm" : "1 722 776 сўм"
                                    }
                                </span>
                            </p>
                            <p className="ish_left_text2">
                                {
                                    language === "UZ" ? "Aloqa: +998666291000" : "Контакты: + 998666291000"
                                }
                            </p>
                        </div>

                        <div className="ish_right_content">
                            <img className="ish_right_img" src={ish_img} alt="ish_right_img" />
                            <p className="ish_right_text"><FaRegClock className="ish_data_icons" />2024-03-10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ish