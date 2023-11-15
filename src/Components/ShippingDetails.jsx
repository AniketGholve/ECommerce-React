/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ShippingDetails = ({ imageUrl, name, data, featureProduct }) => {
    return (
        <div className="card p-1">
            <div className={featureProduct && "backgroundSize-contain"} style={{ background: `url(${imageUrl})no-repeat center`, height: "10vh" }}></div>
            <div className="cardDetails">
                <h4 className="text-center">{name}</h4>
                <h6 className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dolore maiores hic repudiandae? Beatae dolorem aperiam ad illum quas ea.</h6>
            </div>
        </div>
    )
}

export default ShippingDetails