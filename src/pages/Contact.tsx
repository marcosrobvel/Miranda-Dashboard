import * as React from "react";
import ContactTabs from "../components/ContactTabs";
import contactData from "../data/contact";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface UsersListProps {
  contactData: Contact[];
}

export default function UsersList() {
  return (
    <>
      <ContactTabs contactData={contactData} />
    </>
  );
}
