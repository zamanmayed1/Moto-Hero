import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
          return (
                    <div>
                              <h1>Header</h1>
                             <nav>
                                       <Link to={'/'}>HOME</Link>
                                       <Link to={'/reviews'}>REVIEWS</Link>
                                       <Link to={'/dashboard'} >DASHBOARD</Link>
                                       <Link to={'/blog'}>BLOG</Link>
                             </nav>
                    </div>

          );
};

export default Header;