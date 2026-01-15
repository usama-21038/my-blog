import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Navbar/Blogs/Blogs'

function App() {


  const [bookmarked,setBookmarked]=useState([]);
  const handleBookmark=(data)=>{
    setBookmarked([...bookmarked,data]);
  }

  const [readingTime,setReadingTime]=useState(0);
  const handleReadingTime=(time,id)=>{
     const newTime=readingTime+time;
      setReadingTime(newTime);
      // console.log(id);  
      handleRemoveFromBookmark(id);
  }

  const handleRemoveFromBookmark=(id)=>{
    const remainingBookmarks=bookmarked.filter((mark)=>mark.id!==id);
    setBookmarked(remainingBookmarks);
  }

  return (
    <>
    <Navbar></Navbar>
    
    <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
              <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <div className="right-container w-[30%]">
              <h1>Reading time: {readingTime}</h1>
              <h1>Bookmarked count: {bookmarked.length}</h1>
              {
                 bookmarked.map((marked)=><p key={marked.id} className='bg-red-600 p-2 m-1 shadow text-white'>{marked.title}</p>)
              }
        </div>
    </div>
    </>
  )
}

export default App
