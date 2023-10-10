import React from 'react'

const Card = ( {ResourcesCard} ) => {
  return (
    <div className='box'>
          <img src={ResourcesCard.cardimg} alt="" />  
          <div className='box_content'>
              <div>Analytic</div>
              <h5>{ResourcesCard.title}</h5>
              <p>{ResourcesCard.desc}</p>
              
              <div className='auther'>
                  <img src={ResourcesCard.img} alt="" />
                  <div className='auather-content'>
                      <span>{ResourcesCard.authoraName}</span>
                      <div className='date'>
                          {ResourcesCard}
                          <div className='real_time'>
                              {ResourcesCard.realTime}
                          </div>
                      </div>
                  </div>
              </div>
          </div> 
    </div>
  )
}

export default Card
