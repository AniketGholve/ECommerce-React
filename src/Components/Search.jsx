import { useParams } from "react-router-dom"
import ProductGallary from "./ProductGallary";

const Search = () => {
  let product = useParams().product
  return (
    <>
      <div className="w-80">
        <ProductGallary category={product} />
      </div>
    </>
  )
}

export default Search