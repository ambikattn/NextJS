'use client';

import React, { useState, useEffect } from 'react';

const CSRPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyapi.online/api/movies')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
    <h1>CSR Page</h1>
    <ul>
      {data?.map((el)=>{
         return(
              <li>
                  <p>{el?.movie}</p>
                  <span>{el?.rating}</span>
              </li>
         ) 
      })}
    </ul>
  </div>
  );
};

export default CSRPage;