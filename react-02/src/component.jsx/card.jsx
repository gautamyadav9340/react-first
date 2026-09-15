import React from 'react'


const Card = (props) => {
    console.log(props.company , props.Brandlog , props.time , props.locations , props.level , props.stipend , props.posts);
  return (
    <div>
      <div className="card"> 
        <div className="top" >
          <img src={props.Brandlog} alt="" />
          <button>Save</button>

        </div>
        <div><div className="center">
            <h3>{props.company} <span>5 days ago</span></h3>
            <h2>{props.posts}</h2>
            <div className='tag'>
             <h4>{props.time}</h4>
             <h4>{props.level}</h4> 
            </div></div>
        </div>
        <div className="bottom">
          <div>
            <div>
              <h3>{props.stipend}</h3>
              <p>{props.locations}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Card
