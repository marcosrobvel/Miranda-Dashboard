import * as React from "react";
import ContactTabs from "../components/ContactTabs.jsx";
import contactData from "../data/contact.json";

export default function UsersList() {
  return (
    <>
      <ContactTabs contactData={contactData}/>
    </>
  );
}