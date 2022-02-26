import React from 'react'
import CV from '../../assets/My Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download="Aatish.pdf" className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA