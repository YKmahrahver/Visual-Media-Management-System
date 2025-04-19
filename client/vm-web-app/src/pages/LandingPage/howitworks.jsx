import React from 'react'
import logo1 from '../../assets/Checkmark.png'
import logo2 from '../../assets/27 Video Files.png'
import logo3 from '../../assets/Layer_2.png'
import logo4 from '../../assets/Vector.png'
import './howitworks.css';

export default function Howitworks() {
  return(<>
    <div>
      <div className='howitworks-container'>
        <h1 style={{fontSize: '60px'}}>How GeekShelf works</h1>
      </div>
      <div className='steps-container'>
          <div className='step-container'>
            <img className='logo1' src={logo1}></img>
            <div className='step1'>
              <h3>1. Create an Account</h3>
              <p>Sign up with your email and password to get your own private media tracking space.</p>
            </div>
          </div>
          <div className='step-container'>
            <img className='logo1' src={logo2}></img>
            <div className='step1'>
              <h3>2. Add Films & Shows</h3>
              <p>Search or manually enter titles, assign genres, set ratings, and choose a watch status.</p>
            </div>
          </div>
          <div className='step-container'>
            <img className='logo1' src={logo3}></img>
            <div className='step1'>
              <h3>3. Write Your Thoughts</h3>
              <p>Log personal notes and reflections for each entry—no public reviews or social pressure.</p>
            </div>
          </div><div className='step-container'>
            <img className='logo1' src={logo4}></img>
            <div className='step1'>
              <h3>4. Organize & Analyze</h3>
              <p> Sort your library by status, genre, or rating—and view personalized graphs of your media habits.</p>
            </div>
          </div>
      </div>
      
    </div>
   </>)
}