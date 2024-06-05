import "./Faqs.css"
import { FaQuestion } from "react-icons/fa";
import { useState } from 'react'
const Faqs = ({ language }) => {
    const [acardions, setAcardions] = useState([false, false, false, false]);

    const toggleAcardion = (index) => {
        setAcardions(prevState => {
            const newState = prevState.map((value, i) => i === index ? !value : false);
            return newState;
        });
    }
    return (
        <div className="faqs_content">
            <div className="Faqs">
                <p className="faqs_top_text">FAQs</p>
                <p className="faqs_top_line"></p>

                <div className="faqs_acardion">
                    {acardions.map((acardion, index) => (
                        <div key={index} className={acardion ? 'faqs_hero' : 'faqs_hero2'} onClick={() => toggleAcardion(index)}>
                            <div className='faqs_box'>
                                <FaQuestion className="faqs_icons" />
                                <p className='faqs_acardion_text'>
                                    {
                                        language === "UZ"
                                            ?
                                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veritatis velit, laborum assumenda sed ullam possimus consequatur dicta inventore."
                                            :
                                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cum veritatis velit, laborum assumenda sed ullam possimus consequatur dicta inventore."
                                    }
                                </p>
                            </div>
                            {acardion && (
                                <p className='faqs_acardion_text2'>
                                    {
                                        language === "UZ"
                                            ?
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, illo."
                                            :
                                            " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, illo."
                                    }
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faqs;