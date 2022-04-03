import React from 'react';
import useReview from '../hooks/useReview';
import ReviewCard from './ReviewCard';

const Reviews = () => {
          const [reviews , setReviews] = useReview();

          return (
                    <div>
                          
                              <div className='grid md:grid-cols-3 md:gap-20 md:p-24 lg:p-44 '>
                                        {
                                             reviews.map(review => <ReviewCard review={review} key={review.id} ></ReviewCard> )     
                                        }
                              </div>
                    </div>
          );
};

export default Reviews;