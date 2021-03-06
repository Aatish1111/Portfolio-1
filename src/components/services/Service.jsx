import React from 'react'
import './service.css'
 
import { BsCheck } from 'react-icons/bs';

const Service = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {/* UI/UX */}
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
        {/* PYTHON DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Python Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service