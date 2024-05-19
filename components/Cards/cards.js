import React from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/button";



const Card = ({ blogData, isBlogDetails }) => {

  const router = useRouter();

  const toggleContent = (id) => {
    router.push(`blog-details/${id}`);
  };

  return (
    <div className="blogs-container">
      {
        blogData?.map((data, index) => (
          <div
            key={data.id}
            className={`${!isBlogDetails ? 'blogs-card-container' : 'blogs-card-full-width'}`}
          >
          
              <div className="title">
           
                {data?.title}
              </div>
              <div className="name">
            
                {data?.author}
              </div>
              <div  className="date"> 
           
                {data?.date_published}
              </div>
           
            <div className="card-content">
              {data?.content && !isBlogDetails
                ? `${data?.content.split(" ").slice(0, 20).join(" ")}...`
                : data?.content}
            </div>
            <div className="read-more ">
              {!isBlogDetails && (
                <Button
                  name="Read More"
                  onClick={() => toggleContent(data?.id)}
                />
              )}
            </div>
          </div>
        ))
       }
     
    </div>
  );
};

export default Card;
