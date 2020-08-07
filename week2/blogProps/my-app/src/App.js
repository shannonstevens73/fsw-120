import React from 'react'

import Header from "./Header"
import Navbar from "./Navbar"
import BlogList from "./BlogList"
import BlogPost from "./BlogPost"
import Footer from "./Footer"

function App() {
    

    const Blog  = BlogPost.map(blog => <BlogList key={blog.id} title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />)

    // const Footer
  
  return (
      <div>
        <Header />
        {Blog}  
        <Footer />

      </div>
  )
}

export default App
