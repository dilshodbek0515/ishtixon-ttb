import "./Leadership.css";
import leader1 from "../../assets/images/leader imgs/leader1.jpg";
import leader2 from "../../assets/images/leader imgs/leader2.jpg";
import leader3 from "../../assets/images/leader imgs/leader3.jpg";
import leader4 from "../../assets/images/leader imgs/leader4.jpg";
import leader5 from "../../assets/images/leader imgs/leader5.jpg";
import leader6 from "../../assets/images/leader imgs/leader6.jpg";
import leader7 from "../../assets/images/leader imgs/leader7.jpg";
import leader8 from "../../assets/images/leader imgs/leader8.jpg";

const Leadership = ({ language }) => {
    return (
        <div className="leadership_content">
            <div className="leadership">
                <p className="leader_text">
                    {
                        language === "UZ" ? "Raxbariyat" : "Руководство"
                    }
                </p>
                <p className="leader_line"></p>
                <div className="leader_cards_content">
                    <div className="leader_cards">
                        <img className="leader_img" src={leader1} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Иштихон туман тиббиёт бирлашмаси бошлиғи Худайбердиев Азиз Абдуганиевич</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader2} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Кадрлар бўлими бошлиғи Аҳмедов Рахим</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader3} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Даволаш ишлари бўйича ўринбосар Эгамов Отамурод</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader4} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Бирлашма бош фельдшери Жуманазаров Мурадқабул</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader5} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Ташкилий-услубий бўлим мудири Файзиева Гулнора Ёшузоқовна</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader6} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Атажанов Шерзод Яхшибоевич - бирлашманинг компьютер техникаси хизмати бўйича муҳандиси</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader7} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Бирлашманинг Касаба уюшма қўмитаси раиси Айжариқов Эшмумин Абдиназарович</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                    <div className="leader_cards">
                        <img className="leader_img" src={leader8} alt="img" />
                        <div className="bg_hover">
                            <p className="bg_hover_text">Умумий ва иқтисодий масалалар бўйича ўринбосар Норжигитов Баходир Холбоевич</p>
                            <button className="leader_btn">
                                {
                                    language === "UZ" ? "Batafsil" : "Подробнее"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leadership;
