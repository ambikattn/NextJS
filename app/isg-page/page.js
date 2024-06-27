import React from 'react';

async function fetchData() {
  const res = await fetch('https://dummyapi.online/api/movies', { next: { revalidate: 5 } });
  const data =  res.json();
  return { ...data, fetchedAt: new Date().toISOString() };
}

const ISGPage = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>ISG Page</h1>
      <p>Data fetched at: {data.fetchedAt}</p>
    </div>
  );
};

export default ISGPage;