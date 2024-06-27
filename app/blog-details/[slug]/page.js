"use client";
import React, { useEffect, useState } from "react";
import Card from "../../../components/Cards/cards";

const BlogDetails = ({ params }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch(
        `https://dummyapi.online/api/blogposts/${params.slug}`
      );
      const apiData = await response.json();
      setApiData([apiData]);
    } catch {
      console.log("api failed");
    }
  };

  return (
    <>
      <div className="">
       
        {apiData?.length ? (
          <Card blogData={apiData} isBlogDetails={true} />
        ) : (
          <div className="">Loading...</div>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
