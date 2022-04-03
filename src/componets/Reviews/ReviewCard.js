import React from 'react';

const ReviewCard = ({review}) => {
          const {id,image,name,text} = review
          return (
                    <div className='p-10 border grid justify-center items-center' >
                             <div>
                             <img  className='border mx-auto' src={image} alt="" />
                             </div>
                             <div>
                             <h1 className="text-xl font-bold mt-4" >{name}</h1>
                             <h3 className="text-sm " >"{text}"</h3>
                             </div>
                              
                    </div>
          );
};

export default ReviewCard;