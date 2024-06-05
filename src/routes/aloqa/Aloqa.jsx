import "./Aloqa.css"
import { FaPhone } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const Aloqa = ({ language }) => {
    let senTelegram = async (e) => {
        e.preventDefault();
        let { username, surname, tel } = e.target;

        let chat_id = 6891591255;

        let message = "Ismi: " + username.value + "\nFamiliyasi: " + surname.value + "\nTel: " + tel.value;

        await fetch(
            "https://api.telegram.org/bot6585171620:AAHSLuNBrmEiVdvnSA9yvoyBgmvFbXmaVJM/sendMessage",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "cache-control": "no-cache",
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: message,
                }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    alert("Siz muvofiqiyatli ro'yxatdan o'tdingiz!");
                    username.value = "";
                    surname.value = "";
                    tel.value = "";
                } else {
                    alert("Server xatolik!");
                }
            });
    };
    return (
        <div className="Aloqa_content">
            <div className="aloqa">
                <p className="aloqa_text">
                    {
                        language === "UZ" ? "Aloqa" : "Контакты"
                    }
                </p>
                <div className="aloqa_bottom_content">
                    <div className="aloqa_left_content">
                        <p className="aloqa_left_content_text">
                            {
                                language === "UZ"
                                    ?
                                    "Takliflar va murojaatlar uchun"
                                    :
                                    "Для предложений и пожеланий"
                            }
                        </p>
                        <form
                            className="aloqa_form"
                            onSubmit={(e) => senTelegram(e)}
                        >
                            <input
                                type="text"
                                className="aloqa_input"
                                placeholder={language === "UZ" ? "Ism" : "Имя"}
                                required
                                maxLength={15}
                                minLength={3}
                                name="username"
                            />
                            <input
                                type="text"
                                className="aloqa_input"
                                placeholder={language === "UZ" ? "Familiya" : "Фамилия"}
                                required
                                maxLength={20}
                                minLength={5}
                                name="surname"
                            />
                            <input
                                type="text"
                                className="aloqa_input"
                                placeholder={language === "UZ" ? "Telefon raqam" : "Номер телефона"}
                                required
                                maxLength={16}
                                minLength={13}
                                name="tel"
                            />
                            <textarea
                                type="textarea"
                                className="textarea"
                                placeholder={language === "UZ" ? "Ma'luotlar uchun" : "Для информация:"}
                                required
                                maxLength={100}
                                minLength={10}
                                name="izoh"
                            >
                            </textarea>
                            <button type="submid" className="aloqa_btn">
                                {
                                    language === "UZ" ? "Yuborish" : "Отправлять"
                                }
                            </button>
                        </form>
                    </div>
                    <div className="aloqa_right_content">
                        <a className="aloqa_href" href="tel:+998666291000">
                            <div className="aloqa_links">
                                <p className="aloqa_circle"><FaPhone /></p>
                                +998666291000
                            </div>
                        </a>
                        <a className="aloqa_href" href="tel:+998666291000">
                            <div className="aloqa_links">
                                <p className="aloqa_circle"><FaPhone /></p>
                                +998666291000
                            </div>
                        </a>
                        <a className="aloqa_href" href="https://t.me/IshtixonTTBaxborotxizmati">
                            <div className="aloqa_links">
                                <p className="aloqa_circle"><BiLogoTelegram /></p>
                                ishtixon_ttb
                            </div>
                        </a>
                        <a className="aloqa_href" href="mailto:aziz.khudayberdiev@ssv.uz">
                            <div className="aloqa_links">
                                <p className="aloqa_circle"><MdEmail /></p>
                                ishtixon_ttb
                            </div>
                        </a>
                        <a className="aloqa_href" href="https://www.facebook.com/Ishtixonttb?mibextid=ZbWKwL">
                            <div className="aloqa_links">
                                <p className="aloqa_circle"><CgFacebook /></p>
                                ishtixon_ttb
                            </div>
                        </a>
                        <a className="aloqa_href" href="https://www.ishtixonttb.uz/">
                            <div className="aloqa_linkss">
                                <p className="aloqa_circle"><IoLocationSharp /></p>
                                {
                                    language === "UZ" ? "Samarqand viloyati Ishtixon tumani" : "Иштиханский район Самаркандской области."
                                }
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aloqa