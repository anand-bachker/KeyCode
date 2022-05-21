

import React from 'react'

export const DetailBox = (props) => {
  return (
    <div className='w-[200px] h-[240px] bg-slate-400 flex justify-start items-center flex-col'>
        <div className=' heading w-[80%] h-[50px] mt-4 flex justify-center items-center'>
            <div>{props.title}</div>
        </div>
        <div className='value flex justify-center items-center'>
            <div className='text-[60px]'>
                {props.value}
            </div>
        </div>
    </div>
  )
}
