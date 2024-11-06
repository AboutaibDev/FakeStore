import { useEffect} from "react"
import { Card, Row , Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "./Redux/Slices/CartSlice";
import { fetchAll } from "./Redux/Calls/apiCalls";
import Gif from './imgs/loading.gif';

function Products(){
    const productsList = useSelector((state)=>state.products.productsList)
    const loading = useSelector((state)=>state.products.loading)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchAll(dispatch))
    })
    
    function cartAdd(product){
        dispatch(addProduct(product))
    }

    return(
        <Row>
                {
                    loading ? 
                    <div style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                        <img src={Gif} alt="loading.."/>
                    </div> 
                    : 
                    productsList.map((product)=>(
                        <Col lg={3} key={product.id} className="mt-3">
                            <Card key={product.id} style={{height:'650px'}}>
                                <Link to={`/Details/${product.id}`}><Card.Img variant="top" height='450px'  src={product.image} /></Link>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text><h3>{product.price}$</h3></Card.Text>
                                    <Button variant="primary" onClick={(e)=>cartAdd({...product,units: Number(e.target.nextSibling.value)})}>Add</Button>
                                    <select style={{border:'0px',}}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
        </Row>
    )
}
export default Products
