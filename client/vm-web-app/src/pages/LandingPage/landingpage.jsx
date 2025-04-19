import React from 'react'
import './landingpage.css'
import Navbar_LP from './navbar_LP.jsx'
import folderimg from '../../assets/image 1.png'
import paypal from '../../assets/paypal.png'

export default function LandingPage() {
  function LandingPageContent() {
    return (
      <div>
          <div className="landingpage-container">
            <div className="landingpage-content">
              <h1>🎬 Track What You Watch, Privately, and Effortlessly!</h1>
              <p>Organize your favorite film/show, books, comics, and other visual media content in one personal space. Rate, categorize, and write notes about everything you’ve watched/read — or plan to. No social feed. No noise. Just your curated media library, your way.</p>       
              <button className='getStartedButton'>Get Started</button>
            </div>
            <div className='landingpage-image'>
              <img className="folderimg" src={folderimg} alt="Folder" />
            </div>   
         </div>
         <footer className="landingpage-footer">
          <div>
            <div style={{ marginTop: '115px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '200px'}}>
              <h1>HOW TO SUPPORT GEEKSHELF</h1>
              <img style={{height: '100px'}}src={paypal}></img>
            </div>
            <div>
              <p>GeekShelf &copy; 2025</p>
              <p>GeekShelf is a personal media library for tracking what you watch, read, and play.</p>
            </div>
          </div>
         </footer>
      </div>
    )
  }
  return(<>
    <LandingPageContent />
  </>)
}
