import * as React from "react";
import ContactTabs from "../components/ContactTabs.jsx";
import contactData from "../data/contact.js";

export default function UsersList() {
  return (
    <>
      <ContactTabs contactData={contactData}/>
    </>
  );
}