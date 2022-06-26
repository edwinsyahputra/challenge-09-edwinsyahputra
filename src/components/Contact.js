// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

function Contact({ data }) {
  const { name, phone, email, photo } = data;
  return (
    <div className="wrapper">
      <div className="image-profile">
        <img src={photo} alt="profile" className="photo-profile" />
      </div>
      <div className="data-contact">
        <h1 className="name">{name}</h1>
        <h2 className="phone">{phone}</h2>
        <h2 className="email">{email}</h2>
      </div>
    </div>
  );
}

export default Contact;