import React from 'react'
import './home.css'
import GameSwiper from '../components/GameSwiper'
import GameCard from '../components/GameCard'

function Home({games, reference}) {
  return (
    <section id="home" className="home active" ref={reference}>
        <div className="container-fluid">
            <div className="row">
                <GameSwiper games={games}/>
            </div>
            <div className="row mb-3 mt-3">
              <div className="col-lg-6">
                <h3 className="sectionTitle">Games on promotion</h3>
              </div>
              <div className="col-lg-6 d-flex justify-content-end align-items-center">
                <a href="#" className='viewMore'>
                  View more Games <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="row">
              {
                games.slice(0,4).map(game=>(
                  <GameCard key={game._id} game={game}/>
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default Home
