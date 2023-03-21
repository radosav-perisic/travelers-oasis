import React from 'react'

const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:justify-between w-full items-center'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destination</label>
                <select>
                  <option>Indonesia</option>
                  <option>Thailand</option>
                  <option>Hawaii</option>
                  <option>Greece</option>
                </select>
            </div>
            <div>
              <div>
              <label>Check In</label>
              <input type='date'/>
              </div>
              <div>
              <label>Check Out</label>
              <input type='date'/>
              </div>
              </div>
              <div>
                <label>Search</label>
                <button>Reates & Availabilities</button>
              </div>
        </form>
    </div>
  )
}

export default Booking