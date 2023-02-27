import React from 'react'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'

const Product = () => {
  // const Prod = async () => {
  //   const response = await fetch('https://dummyjson.com/products');
  //   const data =  await response.json()
  //   return data
  // }

  // useEffect(() => {
  //   console.log(Prod());
  //   // console.log(data.product);

  // }, []);

  // const Prod = async () => {
  //   fetch('https://dummyjson.com/products')
  //     .then(res => res.json())
  //     .then(console.log);
  //   // const data =  { id, title, description, price, rating, stock, brand,category,thumbnail } = Prod.Products;
  // }

  // useEffect(() => {
  //   Prod();
  // }, []);


 
 
  return (
    <>

   
        <div className="card w-18" >
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
    </ul>
    <div className="card-body">
      <Link to="#" className="card-link">Card link</Link>
      <Link to="#" className="card-link">Another link</Link>
    </div>
  </div>
    </>
  )
}

export default Product