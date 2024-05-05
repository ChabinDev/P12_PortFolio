import React from 'react'

const Footer = () => {

  const theme = 'Dark'

  const year = new Date() 

  return (
    <footer>
    <div className='adress'>
            <div className={`content '${theme}`} >
              <h4>ChabinDev</h4>
              <p>Nantes</p>
              <p>Développeur Web Junior - Freelance</p>
            </div>
      </div>
      <div className={`credits '${theme}`}>
          <p>France - {year.getFullYear()} © - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
