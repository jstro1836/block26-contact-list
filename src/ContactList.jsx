const ContactList = ({ contactList }) => { // <-- Destructuring the prop here
  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <div className="contact-list">
        <div className="contact-list-header">
          <div className="header-item">Name</div>
          <div className="header-item">Email</div>
          <div className="header-item">Phone</div>
        </div>
        {contactList.map((contact, index) => ( // <-- Using the parameter `contact` here
          <div className="contact-item" key={index}>
            <div className="item-name">{contact.name}</div>
            <div className="item-email">{contact.email}</div>
            <div className="item-phone">{contact.phone}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;