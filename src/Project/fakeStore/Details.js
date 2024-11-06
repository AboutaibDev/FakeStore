import { useEffect} from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addProduct } from "./Redux/Slices/CartSlice"
import { fetchOne } from "./Redux/Calls/apiCalls"
import Gif from './imgs/loading.gif';
import { productLoading } from "./Redux/Slices/productSlice"

function Details(){
    const product = useSelector((state)=>state.products.oneProduct)
    const loading = useSelector((state)=>state.products.loading)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        console.log(loading)
        dispatch(fetchOne(id,dispatch))
    })

    function cartAdd(product){
        dispatch(addProduct(product))
    }
    console.log(loading)

    return(
        loading ? 
        <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
            <img src={Gif} alt="loading.."/>
        </div> 
        : 
        <div className="d-flex">
            <div>
                <img src={product.image} alt="product image" />
            </div>
            <div>
                <h2>Title : {product.title}</h2>
                <h4>Price: {product.price}$</h4>
                <p>Category : {product.category}</p>
                <p>Description : {product.description}</p>
                <Button variant="danger" onClick={(e)=>cartAdd({...product,units: Number(e.target.nextSibling.value)})}>Add</Button>
                <select style={{border:'0px'}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </div>
    )
}
export default Details