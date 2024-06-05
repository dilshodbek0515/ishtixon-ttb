import "./Qvp.css"
import data from "../data/data.json"

const Qvp = () => {

    return (
        <div className="Qvp_content">
            <div className="qvp">
                {
                    data.map((e, i) => (
                        <table key={i} className="data" >
                            <th className="id">{e.id}</th>
                            <th className="title">{e.title}</th>
                            <th className="content">{e.content}</th>
                            <th className="data_tel">{e.tel}</th>
                        </table>
                    ))
                }
            </div>

        </div>
    )
}

export default Qvp