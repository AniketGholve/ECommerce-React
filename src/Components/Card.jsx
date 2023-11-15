import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const Card = ({ imageUrl, name, data, id }) => {
    let Navi = useNavigate();
    return (
        <>
            <div className="card" onClick={() => Navi(`/details/${id}`)}>
                <div className="imgdiv" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="cardDetails">
                    <h4 className="text-center">{name}</h4>
                    <p className="rating text-center">⭐⭐⭐⭐⭐</p>
                    <h4 className="text-center">{data}</h4>
                </div>
            </div>
        </>
    )
}

export default Card