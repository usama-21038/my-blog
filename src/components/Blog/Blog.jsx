import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmark,handleReadingTime}) => {
  
  //distructuring props
    // const {blog}=props;

    return (
        <div className='m-2'>
            {/* <h1>{blog.id}</h1> */}
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={blog.coverphoto}
      alt="images"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="author flex items-center text-center justify-around gap-2">
        <h3>{blog.author}</h3>
        <div className="avatar">
  <div className="w-10 rounded-full">
    <img src={blog.authorImage} />
  </div>
</div>
<button onClick={()=>handleBookmark(blog)}><FaBookmark size={25}/></button>
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.description}</p>
    <div className="flex gap-1">
        {
    blog.hashtag.map((has)=><p key={has}>{has}</p>)
    }
    </div>
    <div className="card-actions flex gap-4">

      <button onClick={()=>handleReadingTime(blog.readingTime,blog.id)} className="btn btn-primary">Mark as Read</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;