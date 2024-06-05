import "./Home.css"
import Main from "../../components/main/Main"
import About from "../../components/about/About"
import Leadership from "../../components/leadership/Leadership"
import Faqs from "../../components/faqs/Faqs"
import Links from "../../components/links/Links"
const Home = ({ language }) => {
  return (
    <>
      <Main language={language} />
      <About language={language} />
      <Leadership language={language} />
      <Faqs language={language} />
      <Links language={language} />
    </>
  )
}

export default Home