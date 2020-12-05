import React from 'react';

function Post(props) {
    return (
      <div className="Post">
        <div className='info'>
            <p>{props.post.product_name}</p>
            <p>{props.post.years_used}</p>
            <p>{props.post.subject}</p>
        </div>
        <div className='price'>
            <p>{props.post.price}</p>
        </div>
      </div>
    );
  }
  
  export default Post;