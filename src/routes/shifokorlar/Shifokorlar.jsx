import "./Shifokorlar.css"
import shifokor_img1 from "../../assets/images/leader imgs/leader5.jpg"
import shifokor_img2 from "../../assets/images/leader imgs/leader6.jpg"
import shifokor_img3 from "../../assets/images/leader imgs/leader7.jpg"
import shifokor_img4 from "../../assets/images/leader imgs/leader8.jpg"
const Shifokorlar = ({ language }) => {
    return (
        <div className="Shifokorlar_content">
            <div className="shifokorlar">
                <p className="shifokorlar_text">
                    {
                        language === "UZ" ? "Shifokorlar" : "Врачи"
                    }
                </p>
                <div className="shifokorlar_cards_content">
                    <div className="shifokor_cards">
                        <img src={shifokor_img1} alt="img" className="shifokor_img" />
                        <div className="sh_hover">
                            <p className="sh_hover_text">
                                {
                                    language === "UZ"
                                        ?
                                        "Ташкилий-услубий бўлим мудири Файзиева Гулнора Ёшузоқовна"
                                        :
                                        "Ташкилий-услубий бўлим мудири Файзиева Гулнора Ёшузоқовна"
                                }
                            </p>
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="shifokor_cards">
                        <img src={shifokor_img2} alt="img" className="shifokor_img" />
                        <div className="sh_hover">
                            <p className="sh_hover_text">
                                {
                                    language === "UZ"
                                        ?
                                        "Атажанов Шерзод Яхшибоевич - бирлашманинг компьютер техникаси хизмати бўйича муҳандиси"
                                        :
                                        "Атажанов Шерзод Яхшибоевич - бирлашманинг компьютер техникаси хизмати бўйича муҳандиси"
                                }
                            </p>
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="shifokor_cards">
                        <img src={shifokor_img3} alt="img" className="shifokor_img" />
                        <div className="sh_hover">
                            <p className="sh_hover_text">
                                {
                                    language === "UZ"
                                        ?
                                        "Бирлашманинг Касаба уюшма қўмитаси раиси Айжариқов Эшмумин Абдиназарович"
                                        :
                                        "Бирлашманинг Касаба уюшма қўмитаси раиси Айжариқов Эшмумин Абдиназарович"
                                }
                            </p>
                            <button className="sh_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="shifokor_cards">
                        <img src={shifokor_img4} alt="img" className="shifokor_img" />
                        <div className="sh_hover">
                            <p className="sh_hover_text">
                                {
                                    language === "UZ"
                                        ?
                                        "Умумий ва иқтисодий масалалар бўйича ўринбосар Норжигитов Баходир Холбоевич"
                                        :
                                        "Умумий ва иқтисодий масалалар бўйича ўринбосар Норжигитов Баходир Холбоевич"
                                }
                            </p>
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

export default Shifokorlar;