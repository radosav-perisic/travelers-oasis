import React from 'react'

const ContactForm = () => {
  return (
    <div id='contact'>
        <h2>Contact Us Anytime</h2>
        <p>We're just a message away!</p>
        <div>
            <img src='https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg' alt='/' />
        </div>
        <form>
            <div>
                <input type='text' placeholder='First' />
                <input type='text' placeholder='Last' />
                <input type='email' placeholder='Email' />
                <input type='tel' placeholder='Phone' />
                <input type='text' placeholder='Address' />
                <textarea rows='10' cols='30'></textarea>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm