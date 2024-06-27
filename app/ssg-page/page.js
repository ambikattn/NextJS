import React from 'react';

async function fetchData() {
  const res = await fetch('https://dummyapi.online/api/movies');
  return res.json();
}

const SSGPage = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>SSG Page</h1>
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

export default SSGPage;