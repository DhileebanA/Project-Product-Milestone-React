import React from "react";
import './ProductTable.css'
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv";
import { Link } from "react-router-dom";

// 
export function ProductTable(){
    const[tabData,setTabData]=useState([])
    const[item,setItem]=useState(1)
    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(data=>setTabData(data))
    },[])

    var csvdata=tabData.map((value,index)=>(
        
        [value.id,value.title,value.description,value.category,value.image,value.rating.rate,value.rating.count]
    ),[])

    return(
        <>  
        <div className="bg-dark pb-5">
            <div className="d-flex justify-content-between mx-5 ">
                <h2 className="mt-5 text-white">Show Products</h2>
                <CSVLink data={csvdata}><button className="btn btn-success mt-5">Download CSV <FontAwesomeIcon icon={faFileArrowDown} fontSize="1.5em"/></button></CSVLink>
            </div>
            <div className="container-fluid px-4 mt-5">
                <table className="table table-striped table-hover table-border">
                    <thead>
                        <tr className="text-center">
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Discription</th>
                            <th>Catogory</th>
                            <th>Count</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Add to Cart</th>
                            <th>View Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        tabData.map((value,index)=>(
                            <>
                                <tr>
                                    <td>{value.id}</td>
                                    <td className="text-center"><img src={value.image} height="100px"/></td>
                                    <td>{value.title}</td>
                                    <td>{value.description.slice(0,50)}...</td>
                                    <td>{value.category}</td>
                                    <td>{value.rating.count}</td>
                                    <td width="100px">{value.rating.rate}/5.0<StarRatings
                                        rating={value.rating.rate}
                                        starRatedColor="gold"
                                        starDimension="15px"
                                        starSpacing=""
                                        numberOfStars={5}
                                        name='rating'/>
                                    </td>
                                    <td><span className="fw-bold">₹</span>{value.price}</td>
                                    <td width="150px"><span><button className="btn btn-dark" onClick={()=>{if(item != 0){setItem(item - 1)}}}>-</button> <input className="text-center" id="addToCart" type="text" size="1" value={item} disabled/> <button className="btn btn-dark" onClick={()=>{setItem(item+1)}}>+</button></span>
                                    </td>
                                    <td><Link to={`/product/${value.id}`}><button className="btn btn-primary">View</button></Link></td>
                                </tr>
                            </>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}