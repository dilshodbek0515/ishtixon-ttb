import "./Bulimlar.css"
import bulim_imgs from "../../assets/images/bulimlar img/bulim img.jpg"
const Bulimlar = ({ language }) => {
    return (
        <div className="Bulimlar_content">
            <div className="bulimlar">
                <p className="bulimlar_text">
                    {
                        language === "UZ" ? "Bulimlar" : "Отделы"
                    }
                </p>
                <div className="bulimlar_card_content">
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Tug`ruq bo`limi" : "Родильное отделение"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Qon-tomir kasalliklari bo`limi" : "Отделение сосудистых заболеваний"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Qabul va diagnostikasi bo`limi" : "Приемно-диагностическое отделение"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Jarrohlik bo`limi" : "Кафедра хирургии"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Jonlantirish bo'limi" : "Отдел ревитализации"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Ichki kasalliklar bo'limi" : "Кафедра внутренней медицины"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Bolalar kasalliklar bo'limi" : "Кафедра детских болезней"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Qon quyish bo'limi" : "Отделение переливания крови"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Yuqumli kasalliklar bo'limi" : "Кафедра инфекционных болезней"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Ginekologiya bo'limi" : "Отделение гинекологии"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Kilinik laboratoriya bo'limi" : "Клинико-лабораторный отдел"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="bulimlar_cards">
                        <img src={bulim_imgs} alt="img" className="buimlar_img" />
                        <p className="bulim_card_text">
                            {
                                language === "UZ" ? "Reabilitatsiya bo'limi" : "Реабилитационное отделение"
                            }
                        </p>
                        <div className="bulimlar_hover">
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bulimlar