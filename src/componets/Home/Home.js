import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../hooks/useReview';
import ReviewCard from '../Reviews/ReviewCard';
const Home = () => {
       const [reviews , setReviews] = useReview();
       const threeReview = reviews.slice(0,3)
          return (
                    <div>
                           <div className="headersection md:flex w-full md:px-40 py-10">
                                     <div className="text md:w-2/4 grid items-center text-left ">
                                               <div className='px-3'>
                                               <h1 className="text-3xl md:text-5xl my-2 text-red-500">
                                               THE FIRST PREMIUM LIGHTWEIGHT E-MOTORBIKE
                                               </h1>
                                               <p className="text-xl md:text-2xl">NOVUS is a handcrafted-limited series full carbon fiber Motorbike.
                                                  NOVUS is more than a Motorcycle. It is a piece of Art on Wheels 
                                               </p>
                                               <button className='px-4 mt-8 py-3 bg-red-500 text-white font-bold'>
                                               <Link to={'/blog'}>Read More</Link>
                                               </button>
                                          
                                               </div>
                                     </div>
                                     <div className="image md:w-2/4 flex justify-center content-center">
                                               <img className='w-3/4' src="https://novusbike.com/files/bilder/startseite/novus-seitlich-rot-cf.png" alt="" />
                                     </div>

                           </div>
                           <div className="reviews p-10 md:px-40"> 
                                          <h1 className="text-2xl md:text-3xl font-bold mb-6 ">Biker Reviews</h1>
                                          <div className='grid md:grid-cols-3 gap-10' >
                                          {
                                             threeReview.map(review => <ReviewCard review={review} key={review.id} ></ReviewCard> )     
                                        } 
                                          </div>

                                          <button className='px-4 mt-8 py-3 bg-blue-600 text-white font-bold'>
                                                 <Link to={'/reviews'}>See All Reviews</Link>
                                          </button>
                           </div>
                    </div>
          );
};

export default Home;