import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-600 p-4'>Gallery </h2>
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'/>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
            </div>
        </div>
    </div>
  )
}

export default Gallery