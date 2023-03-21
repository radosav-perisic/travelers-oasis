import React from 'react'

const Booking = () => {
  return (
    <div id='deals'>
        <form>
            <div>
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
        </form>
    </div>
  )
}

export default Booking