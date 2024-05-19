"use client";
import React, { useEffect, useState } from "react";
import BlogsCards from "../../components/Cards/cards";

const BlogsPages = () => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("https://dummyapi.online/api/blogposts");
      const data = await response.json();
      setApiData(data);
    } catch {
      console.log("api failed");
    }
  };
  return (
    <>
      <div className="">

      </div>
      {apiData ? (
        <div className="">
          <BlogsCards blogData={apiData} />
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </>
  );
};

export default BlogsPages;
