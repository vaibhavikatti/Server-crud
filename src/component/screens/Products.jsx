import React,{useEffect,useState} from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useParams , NavLink } from 'react-router-dom'

const URL="https://dummyjson.com"

function Products(props){

    const[products,setProducts]=useState([])
    const params = useParams()
    console.log("params =",params)


    const getProducts = async ()=>{
        await axios.get(`${URL}/products/category/${params.cName}`)
        .then(res=>{
            //resoved state
            console.log('products',res.data)
            setProducts(res.data.products)
        }).catch(err =>toast.error(err.message))
    }

    useEffect(()=>{
        getProducts()
    },[])
    return(
        <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
               <h3 className='text-success display-3'>Products</h3>
               <h5 className="display-5 text-warning">{params.cName}</h5>
               </div>
            </div>
            <div className="row">
                {
                    products && products.map((item,index)=>{
                        const{id,title,images,thumbnail,price}= item
                        return(
                            <div className="col-md-4 mt-2 mb-2" key={index}>
                                <div className="card">
                                    <img src={thumbnail ?thumbnail:"#" } alt="no image" className='card-img-top' height={300} />
                                    <div className="card-body">
                                        <h6 className="text-center text-success">{title}</h6>
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <strong>Price</strong>
                                                <span className="float-end"> &#8377;{price}</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-footer">
                                        <NavLink to={`/update/${id}`} className={"btn btn-sm btn-info"}> <i className="bi bi-pencil"></i> </NavLink>
                                        <button className="btn btn-sm btn-danger float-end">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
export default Products