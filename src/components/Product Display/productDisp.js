import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProductDisp() {
    const [tabData, setTabData] = useState([])
    var {id}=useParams()

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setTabData(data))
    },[])

    return (
        <>
        <div className="container-fluid bg-dark d-flex justify-content-center">
            <div className="row container bg-white m-5 p-4 rounded-4">
                {
                    <>
                        <div className="col-lg-6 container">
                            <img src={tabData.image} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 container">
                            <h2 className="fw-bold">{tabData.title}</h2><br/>
                            <h3>Product Description</h3>
                            <div>{tabData.description}</div><br/>
                            <h3>Product Price</h3>
                            <div className="fs-5"><span className="fw-bold fs-5">Rs. </span>{tabData.price}</div>
                        </div>
                    </>
                }
            </div>
        </div>
        </>
    )
}