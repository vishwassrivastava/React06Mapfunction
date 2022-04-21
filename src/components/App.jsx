import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contacts.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

//map function takes the element that is object one by one from the contacts array and maps it with thr function createCard
//key property is compulsorywhenever the map function is used.key should be any unique no,character or a string,in our case it is id
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}

      <Card
      //        name={contacts[0].name}
      //       img={contacts[0].imgURL}
      //        tel={contacts[0].phone}
      //       email={contacts[0].email}
      />
      <Card
      //     name={contacts[1].name}
      //       img={contacts[1].imgURL}
      //       tel={contacts[1].phone}
      //        email={contacts[1].email}
      />
      <Card
      //      name={contacts[2].name}
      //      img={contacts[2].imgURL}
      //      tel={contacts[2].phone}
      //      email={contacts[2].email}
      />
    </div>
  );
}

export default App;
