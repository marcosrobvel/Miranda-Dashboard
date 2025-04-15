import React, { useState } from "react";
import CardReview from "./CardReview";
import { contactData } from '../../../data/contact';
import {
  StyledButton,
  StyledCard,
  StyledDiv,
  StyledParaph,
  StyledSlider
} from "../../styled-components/HomeSlider";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type Contact = {
  subject: string;
  comment: string;
  customer: string;
  mail: string;
  phone: string;
};

export default function SliderReviews() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalContacts = contactData.length;
  const itemsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < totalContacts) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    } else {
      setCurrentIndex(Math.floor(totalContacts / itemsPerPage) * itemsPerPage);
    }
  };

  const currentContacts = (contactData as Contact[]).slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <>
      <StyledSlider className="slider">
        <StyledParaph className="paraph-title-slider">Lastest Review by Customers</StyledParaph>
        <StyledButton className="prev" onClick={prevSlide}>
          {<BsArrowLeft />}
        </StyledButton>

        <StyledDiv className="card-container">
          {currentContacts.map((contact, index) => (
            <StyledCard key={index}>
              <CardReview
                subject={contact.subject}
                comment={contact.comment}
                name={contact.customer}
                email={contact.mail}
                phone={contact.phone}
              />
            </StyledCard>
          ))}
        </StyledDiv>

        <StyledButton className="next" onClick={nextSlide}>
          {<BsArrowRight />}
        </StyledButton>
      </StyledSlider>
    </>
  );
}
