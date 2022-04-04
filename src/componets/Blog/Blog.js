import React from 'react';

const Blog = () => {
          return (
                    <div className='text-left md:p-12 md:flex  p-4 '>
                             <div className="que1 md:w-2/4 mb-4 singleCard p-4 m-4">
                             <h1 className='text-3xl font-bold mb-4' >1) What is semantic Tag in Html ? </h1>
                             <p className='text-xl '>
                             Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Semantic HTML or markup tags provide the website meaning full and attractive. Semantic tag its main work the webise clean and describe meaningfully. Mordren HTML5 provide more clean tag. semantic elements example: form , table img , address. code ,span , h1-h6. Semantic tag help us lots. If we create header or footer thos tag help to create is application eassily.

                             </p>
                             </div>
                             <div className="que2 md:w-2/4 singleCard p-4 m-4">
                             <h1 className='text-3xl font-bold mb-4' >2) Difference between Inline , Block, Inline-Block ? </h1>
                             <p className='text-xl '>
                                       
                             <span className= 'font-bold'> Inline</span> elements display in a line. They do not force the text after them to a new line.An anchor (or link) is an example of an inline element. You can put several links in a row, and they will display in a line. <br /> <br />

                              <span className= 'font-bold'>Block </span> level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.
                              The <span className='text-red-800 font-bold'>p</span>  element is an example of a block level element. Each new paragraph tag will appear on its own line vertically. Paragraphs with longer content will stretch all the way to the edge of the page. <br /><br />

                              <span className= 'font-bold'>Inline-block</span>  elements are similar to inline elements, except they can have padding and margins added on all four sides.

                             </p>
                             </div>
                             
                             
                             
                    </div>
          );
};

export default Blog;