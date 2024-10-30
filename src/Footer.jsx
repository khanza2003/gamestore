import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div style={{height:'200px',background:'black',marginTop:'1000px',width:'100vw'}} className='mt-5 container w-100 ' >
      <div  style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        {/*introduction*/}
        <div style={{width:'400px' ,color:'white',marginTop:'20px'}}>
          <h2><i class="fa-solid fa-gamepad"></i> Game Store</h2>
          <p>Built with passion by the Gaming Store team, bringing the best games to players worldwide.</p>
        <p>Game assets and code are licensed under MIT. Community contributions welcome!</p>
        <p>All rights reserved © 2024 Gaming Store.</p>
        </div>
        {/*links*/}
        <div style={{color:'white'}}>
            <h2>Links</h2>
            <Link  to={'/'} style={{textDecoration:'none',color:'white',marginTop:'10px'}}>Landing Page</Link><br />
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link><br />
            <Link to={'/about'} style={{textDecoration:'none',color:'white'}}>About Page</Link>
        </div>
        {/*guides*/}
        <div className='d-flex flex-column' style={{color:'white'}}>
          <h2>Guides</h2>
          <a style={{textDecoration:'none',color:'white',marginTop:'10px'}} href='https://react.dev/' target='_blank'>React</a><br />
          <a style={{textDecoration:'none',color:'white'}} href='https://reactrouter.com/en/main' target='_blank'>React Router</a><br />
        </div>      
        {/*contact*/}
        <div className=' d-flex flex-column' style={{color:'white',marginRight:'40px'}}>
            <h2>Contact</h2>

            <div className='d-flex justify-content-between mt-3'style={{marginTop:'10px'}}>
              <a href="https://x.com/?lang=en-in&mx=2" style={{textDecoration:'none',color:'white',marginLeft:'10px'}} target='_blank'><i><i class="fa-brands fa-twitter" ></i></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none',color:'white',marginLeft:'10px'}} target='_blank'><i><i class="fa-brands fa-instagram" ></i></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none',color:'white',marginLeft:'10px'}} target='_blank'><i><i class="fa-brands fa-facebook" ></i></i></a>
              <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none',color:'white',marginLeft:'10px'}} target='_blank'><i><i class="fa-brands fa-linkedin" ></i></i></a>
              <a href="https://github.com/dashboard" style={{textDecoration:'none',color:'white',marginLeft:'10px'}} target='_blank'><i><i class="fa-brands fa-github" ></i></i></a>
              
            </div>
        </div>
      </div>
      <p className='text-center mt-3' style={{color:'white',textAlign:'center',marginTop:'30px'}}>Copyright &copy; July 2024 Batch, Gaming Store App. Built with React</p>
    </div>
  )
}

export default Footer