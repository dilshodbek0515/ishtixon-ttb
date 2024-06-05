import { Route } from "react-router-dom"
import Header from "../components/header/Header"
import Home from "../routes/home/Home"
import Shifokorlar from "../routes/shifokorlar/Shifokorlar"
import Bulimlar from "../routes/bulimlar/Bulimlar"
import Yanigiliklar from "../routes/yangiliklar/Yangiliklar"
import Ish from "../routes/ish/Ish"
import Qvp from "../routes/qvp/Qvp"
import Aloqa from "../routes/aloqa/Aloqa"
import Footer from "../components/footer/Foteer"
import Sidebar from "../components/sidebar/Sidebar"
import { Overlay } from "../components/utils";
import { useState, useEffect } from "react"
const Routes = () => {

    const [language, setlanguage] = useState("UZ");

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        if (sidebar === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [sidebar]);

    return (
        <>
            <Header
                language={language}
                setlanguage={setlanguage}
                setSidebar={setSidebar}
            />

            <Sidebar
                sidebar={sidebar}
                setSidebar={setSidebar}
                language={language}
            />
            {
                sidebar &&
                <Overlay
                    setSidebar={setSidebar}
                />
            }


            <Route exact path="/" >
                <Home language={language} />
            </Route>

            <Route path="/doctors">
                <Shifokorlar language={language} />
            </Route>

            <Route path="/departaments">
                <Bulimlar language={language} />
            </Route>

            <Route path="/news">
                <Yanigiliklar language={language} />
            </Route>

            <Route path="/workplace">
                <Ish language={language} />
            </Route>

            <Route path="/QVP">
                <Qvp language={language} />
            </Route>

            <Route path="/contact">
                <Aloqa language={language} />
            </Route>
            <Footer language={language} />
        </>
    )
}

export default Routes