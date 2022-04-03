import React from 'react';

const ReviewCard = ({review}) => {
          const {image,name,text,ratings} = review
          return (
                    <div className='p-10 singleCard grid justify-center items-center' >
                             <div>
                             <img  className='rounded-full border border-black mx-auto w-28' src={image} alt="" />
                             </div>
                             <div>
                             <h1 className="text-2xl font-bold mt-4" >{name}</h1>
                             <h1 className="text-sm font-bold mt-4" >Ratings : {ratings}</h1>
                             <h3 className="text-sm " >"{text}"</h3>
                             </div>
                              
                    </div>
          );
};

export default ReviewCard;