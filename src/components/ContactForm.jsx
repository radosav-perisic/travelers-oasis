import React from "react";

const ContactForm = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-600">Contact Us Anytime</h2>
      <p className="text-center text-gray-600 py-2">
        We're just a message away!
      </p>
      <div className="grid md:grid-cols-2">
        <img
          src="https://images.pexels.com/photos/3580532/pexels-photo-3580532.jpeg"
          alt="/"
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
        />
      </div>
      <form>
        <div>
          <input type="text" placeholder="First" />
          <input type="text" placeholder="Last" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Address" />
          <textarea rows="10" cols="30"></textarea>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
