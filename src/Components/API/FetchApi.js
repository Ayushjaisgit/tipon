import React, { useState, useEffect } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});

  //Get Method
  const apiGet = async () => {
    await fetch("https://dummyjson.com/products")
     .then((response) => response.json())
      .then((json) => {
          setData(json);
          console.log(json);
        
        console.log(data.products[0]);
      });
  };
  return (
    <div> My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ul>
          {Object.keys(data).forEach((products) => (
            <li key={data.products}>{data.products}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="text"
            name="body"
            placeholder="body"
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            name="userId"
            placeholder="userId"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Submit" onChange={handleChange} />
        </form> */}
      </div>
    </div>
  );
}

export default FetchAPI;
