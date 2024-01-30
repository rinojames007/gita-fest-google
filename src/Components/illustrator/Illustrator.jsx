import React from 'react'

const Illustrator = (props) => {
  return (
    <div className="ilustrator flex justify-center w-full items-center pt-[30px] ">
        <img
          src={props.url}
          alt="ilustrator"
          className="w-[95%]"
        />
      </div>
  )
}

export default Illustrator