import React from 'react';

const Blog = ({blog}) => {
  
  //distructuring props
    // const {blog}=props;

    return (
        <div>
            {/* <h1>{blog.id}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={blog.coverphoto}
      alt={blog.title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.description}</p>
    <div className="card-actions flex gap-4">
        <button className='btn btn-primary'>Book Mark</button>
      <button className="btn btn-primary">Mark as Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;