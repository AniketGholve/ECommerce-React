/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import Card from "./Card"
import { useEffect, useState } from "react"
import { getProducts } from "./Redux/Slice"

const ProductGallary = ({ category }) => {
    let [loadDataCount1, setLoadDataCount1] = useState(4)
    let mainData = useSelector((store) => store.ECommerce.storeData).filter((item) => item.cat.includes(category))
    let data = mainData.slice(0, loadDataCount1);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    return (
        <>
            {
                data.length > 0 ? <div className="storeGallary">
                    {data.map((item, key) => (
                        <Card key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
                    ))}
                </div> : <div className="h-50">
                    <h1 className="text-center">No Data Found</h1>
                </div>
            }
            {
                mainData.length > loadDataCount1 &&
                <div className=" d-flex justify-content-center mx-1">
                    <button className="btn btn-danger" onClick={() => setLoadDataCount1(loadDataCount1 + 4)}>Load More</button>
                </div>
            }
        </>
    )
}
const StoreGallary = () => {
    let [loadDataCount, setLoadDataCount] = useState(8)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    let mainData = useSelector((store) => store.ECommerce.storeData)
    let data = mainData.slice(0, loadDataCount);
    return (
        <>
            <div className="storeGallary">
                {data.map((item, key) => (
                    <Card key={key} data={item.price} name={item.name} imageUrl={item.url} id={item.id} />
                ))}
            </div>
            {
                mainData.length > loadDataCount &&
                <div className=" d-flex justify-content-center mx-1">
                    <button className="btn btn-danger" onClick={() => setLoadDataCount(loadDataCount + 4)}>Load More</button>
                </div>
            }
        </>
    )
}

export default ProductGallary
export { StoreGallary } 