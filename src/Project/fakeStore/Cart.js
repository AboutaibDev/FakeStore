import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { delProduct } from "./Redux/Slices/CartSlice"
import { Link } from "react-router-dom"

function Cart(){
    const cartList = useSelector((state)=>state.cart.list)
    const dispatch = useDispatch()
    function remove(product){
        dispatch(delProduct(product))
    }
    let total = 0
    cartList.forEach((object) => {
        total = total + (object.price*object.units)
    });
    return(
        cartList.size == 0 ? 
        <h2>Cart is empty</h2> 
        :
        <table className="table m-3">
            <tr>
                <th>Item</th>
                <th>Image</th>
                <th>Title</th>
                <th>Units</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
            {
            [...cartList].map((product,index)=>(
                <tr key={index}>
                    <th>{index+1}</th>
                    <td><Link to={`/Details/${product.id}`}><img height='100px'  src={product.image} /></Link></td>
                    <td>{product.title}</td>
                    <td>{product.units}</td>
                    <td>{product.price}$ x {product.units} = {(product.price*product.units).toFixed(2)}$</td>
                    <td><Button variant="primary" onClick={(e)=>remove({...product,units: product.units - Number(e.target.nextSibling.value)})}>Remove</Button>
                    <select style={{border:'0px'}}>
                        {[...Array(product.units).keys()].map((_,i)=>(
                            <option key={i+1}>{i+1}</option>    
                        ))}
                    </select></td>
                </tr>
            ))
            }
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <th>Total : {total.toFixed(2)}$</th>
            </tr>
        </table>
    )
}
export default Cart