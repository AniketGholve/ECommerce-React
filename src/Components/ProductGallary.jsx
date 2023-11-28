/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import Card from "./Card"
import { useEffect } from "react"
import { getProducts } from "./Redux/Slice"

const ProductGallary = ({ category }) => {
    let data = useSelector((store) => store.ECommerce.storeData)
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (
        <div className="storeGallary">
            {data.filter((item) => item.cat.includes(category)).map((item, key) => (
                <Card key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
            ))}
        </div>
    )
}
const StoreGallary = () => {
    let data = useSelector((store) => store.ECommerce.storeData)
    return (
        <div className="storeGallary">
            {data.map((item, key) => (
                <Card key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
            ))}
        </div>
    )
}

export default ProductGallary
export {StoreGallary} 