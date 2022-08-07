import React from 'react'
import './Character.css'
import img from '../../images/img4.jpg'
import { Link } from 'react-router-dom'

function Character() {
  return (
    <div className="character">
        <div className="left-c">
            <img src={img} alt="Alpha Man" />
        </div>
        <div className="right-c">
            <h2><span>Choose</span><br/> your<br/> Character</h2>
            <p>We have formed a global suit purchasing concept, with excellent technology, excellent tailoring, first-class after sales service and reasonable price, to create a new model of modern urban menswear</p>
            <Link to='/shop'><button className='btn'>Discover more</button></Link>
        </div>
    </div>
  )
}

export default Character