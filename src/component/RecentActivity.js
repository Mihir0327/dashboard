import React from 'react'
import {BsArrowRight} from "react-icons/bs"
const RecentActivity = () => {
  return (
    <>
        <div className='space-y-2'>
            <div className='flex justify-between '>
                <div className='text-xl'>
                    <h1>Recent Activity</h1>
                </div>
                <div>
                    <h1 className='flex items-center space-x-7'>See All<BsArrowRight/></h1>
                </div>
            </div>

            <div className='flex justify-between bg-blue-950/80 p-2 rounded-lg'>
                
                    <div  className='flex space-x-2'>
                        <div><img src="r1.png" alt="" /></div>
                        <div className='flex flex-col justify-around'>
                            <div>Crystal Art</div>
                            <div>by @rudePixxel</div>

                        </div>
                    </div>
                    <div>
                        <div className='text-cyan-300'>New Bid</div>
                        <div>6.25 ETH</div>
                        <div>3m ago</div>
                    </div>
                
                
            </div>

            <div className='flex justify-between bg-blue-950/80 p-2 rounded-lg'>
                <div className='flex space-x-2'>
                    <div><img src="r2.png" alt="" /></div>
                    <div className='flex flex-col justify-around'>
                        <div>Crystal Art</div>
                        <div>by @rudePixxel</div>
                    </div>
                </div>
                <div>
                    <div className='text-cyan-300'>New Bid</div>
                    <div>6.25 ETH</div>
                    <div>3m ago</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default RecentActivity