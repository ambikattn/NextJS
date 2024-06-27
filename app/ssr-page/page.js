
import React from 'react';

async function fetchData() {
  const res = await fetch('https://dummyapi.online/api/movies', { cache: 'no-store' });
  return res.json();
}

const SSRPage = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>SSR Page</h1>
   
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

export default SSRPage;
