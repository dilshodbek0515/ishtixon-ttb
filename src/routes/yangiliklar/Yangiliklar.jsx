import "./Yangiliklar.css"
import yangiliklar_imgs from "../../assets/images/yangiliklar img/yangiliklar img.jpg"
const Yangiliklar = ({ language }) => {
    return (
        <div className="Yangiliklar_content">
            <div className="yangiliklar">
                <p className="yangiliklar_text">
                    {
                        language === "UZ" ? "Yangiliklar" : "Новости"
                    }
                </p>
                <div className="yangiliklar_bottom_content">
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Assalomu alaykum! 2024 yil 9 may kuni “Aholiga ko‘rsatilayotgan birlamchi tibbiy sanitariya yordam holati” bo‘yicha brifing o‘tkaziladi. Shu munosabat bilan tumandagi barcha OAVlarni va blogerlarni Ishtixon tuman tibbiyot birlashmasining majlislar zaliga taklif etamiz. Ishtixon tuman tibbiyot birlashmasi"
                                    :
                                    "Привет! 9 мая 2024 года состоится брифинг на тему «Состояние первичной медико-санитарной помощи населению». В связи с этим приглашаем всех представителей СМИ и блогеров района в зал заседаний Иштиханского районного медицинского объединения. Иштиханское районное медицинское объединение"
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Ishtixon tumani “Qiyot” mahalla fuqarolar yig‘ini “Obod xonadon”, “Obod ko‘cha” va “Obod mahalla” mezonlarini joriy etish borasida ishlar yakuniga yetdi. Bugun “Zarafshon” bazmgohida ushbu mahallaning obodonchilik va qurilish ishlarida faol qatnashgan bir guruh tashkilotlar hamda tadbirkorlarga tuman hokimligining tashakkurnomalari va esdalik sovg‘alari topshirildi. Tadbir davomida bir piyola choy ustida madaniy tadbirlar davom etdi, tuman madaniyat bo‘limi xodimlari tomonidan kuy qo‘shiqlar barchaning ko‘ngillarini xushnut etdi."
                                    :
                                    "Районный сход граждан Иштиханского района «Кият»,  «Обод махалля». Сегодня в клубе «Зарафшон» группе организаций и предпринимателей, принимавших активное участие в работах по благоустройству и строительству этого микрорайона, были вручены благодарственные письма и сувениры от администрации района. В ходе мероприятия культурная деятельность продолжилась за чашечкой чая, песни в исполнении сотрудников районного отдела культуры привели всех в восторг."
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "SAYYOR QABUL - 2024! 2024 yil 11 may kuni soat 08:00 da Ishtixon tuman tibbiyot birlashmasi boshlig‘i Xudayberdiyev Aziz Abduganiyevich boshchiligida tuman ko‘p tarmoqli markaziy poliklinika tor soha mutaxassislari va markaziy shifoxona bo‘lim boshliqlari ishtirokida Ishtixon tuman aholisi uchun sog‘lomlashtirishga qaratilgan targ‘ibot-tashviqot ishlari va chuqurlashtirilgan tibbiy ko‘riklar tashkil etish maqsadida .O‘zingiz va yaqinlaringiz sog‘lig‘iga befarq bo‘lmang. Ishtixon tuman tibbiyot birlashmasi"
                                    :
                                    "ПРИЕМ НА ПУТЕШЕСТВИЕ - 2024! 11 мая 2024 года в 08:00 часов под руководством руководителя Иштихонского Азиза Абдуганиевича при участии  многопрофильной центральной поликлиники и заведующих отделениями , направленная на улучшение здоровья населения. жителям Иштихонского района - в целях организации пропагандистских мероприятий и углубленных медицинских осмотров. Не будьте безразличны к здоровью себе и своим близким. Иштиханское районное медицинское объединение"
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Ishtixon tuman tibbiyot birlashmasiga qarashli Mitan shaharchasida joylashgan Mitan oilaviy poliklinikasida Samarqand viloyat ko‘p tarmoqli bolalar tibbiyot markazining malakali tor soha mutaxassislari terapevt, bolalar nevropatologi, xirurg, otorinolaringolog, stomatolog, pediatr, ortoped-travmatologlar tomonidan tuman aholisini tibbiy ko‘rikdan o‘tkazishmoqda Ishtixon tuman Tibbiyot birlashmasi kanaliga a’zo bo‘ling Telegram 👉🏻 https://t.me/IshtixonTTBaxborotxizmati Facebook 👉🏻 https://www.facebook.com/Ishtixonttb?mibextid=ZbWKwL"
                                    :
                                    "В семейной поликлинике «Митан», расположенной в городе Митан, входящей в Иштихонское районное медицинское объединение, работают квалифицированные узкопрофильные специалисты Самаркандского  педиатры, ортопеды. врачи-травматологи проводят медицинские осмотры жителей района. Подписывайтесь на канал Иштихонского районного медицинского объединения Telegram 👉🏻 https://t.me/IshtikhonTTBaxborotxizmati Facebook 👉🏻 https://www.facebook.com/Ishtikhonttb?mibextid. =ZbWKwL"
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Ishtixon tuman Tibbiyot birlashmasining majlislar zalida birlashmaga qarashli davolash-profilaktika muassasalarida faoliyat yuritayotgan “Tibbiy brigada” amaliyotchi hamshiralarning lavozim yo‘riqnomasi bo‘yicha o‘quv seminari o‘tkazildi va tuman Tibbiyot birlashmasiga qarashli tuman ko’p tarmoqli markaziy poliklinika endokrinolog shifokori Otamurod Egamov tomonidan qonda glyukozani aniqlash qandli diabetga moil aholi orasida amaliyotchi hamshiralarga berilgan Glukomert yordamida test o’tkazish usuli o’rgatildi."
                                    :
                                    "В зале заседаний Иштихонского районного медицинского объединения прошел обучающий семинар по должностным инструкциям практикующих медицинских сестер «Медицинской бригады», работающих в лечебно-профилактических . районному медицинскому объединению Отамурода Егамова обучен методу определения уровня глюкозы в крови с помощью «Глюкомерта», который был передан практикующим медицинским сестрам среди людей, склонных к диабету."
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Соғлиқни сақлаш вазирлигининг 2023-йил 29-апрелдаги 11-11249-сонли томонидан ишлаб чиқилган режага асосан 2023 йил 20-май куни Иштихон туман Тиббиёт бирлашмасига қарашли туман кўп тармоқли марказий поликлиникада “Ёшлар саломатлиги ойлиги” акцияси ўтказилди. Акция доирасида тумандаги 18-30 ёшгача бўлган ёшлар вилоятдан келган 15 турдаги тиббиёт мутахассислари ва КТМП тор соҳа мутахассислари томонидан мақсадли тиббий кўриклардан ўтказилди."
                                    :
                                    "Согласно плану, разработанному Министерством здравоохранения № 11-11249 от 29 апреля 2023 года, 20 мая 2023 года в районной многопрофильной центральной поликлинике, принадлежащей Иштихонскому районному медицинскому объединению, проведена акция «Месяц здоровья молодежи». В рамках акции целевые медицинские осмотры прошли 15 видов медицинских специалистов области и профильных специалистов Национального института медицинских наук района."
                            }
                        </p>
                    </div>
                    <div className="yangiliklar_cards">
                        <img className="yangiliklar_img" src={yangiliklar_imgs} alt="img" />
                        <p className="yangiliklar_card_text">
                            {
                                language === "UZ"
                                    ?
                                    "Ishtixon tuman Tibbiyot birlashmasining majlislar zalida birlashmaga qarashli davolash-profilaktika muassasalarida faoliyat yuritayotgan “Tibbiy brigada” patronaj hamshiralariga Sog‘lom turmush tarzi umummilliy loyihasi, Salomatlik maktabi hamda patronaj hamshiralarning lavozim yo‘riqnomasi bo‘yicha o‘quv seminari o‘tkazildi. Mazkur o‘quv jinsi va yoshidan qat’iy nazar birlamchi tibbiy yordam ko‘rsatish va karantin, o‘ta xavfli va boshqa yuqumli kasalliklarni oldini olish bo‘yicha tadbirlar o‘tkazib borish borasida ma’lumotlar berildi."
                                    :
                                    "В зале заседаний Иштихонского районного медицинского объединения учреждениях, входящих в объединение, по национальному проекту «Здоровый образ жизни», «Школа здоровья». Санитарно-должностные инструкции патронажных медицинских сестер. В данном исследовании предоставлена ​​информация по оказанию первичной медицинской помощи независимо от пола и возраста, проведению карантинных, особо опасных и других мероприятий по профилактике инфекционных заболеваний."
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yangiliklar