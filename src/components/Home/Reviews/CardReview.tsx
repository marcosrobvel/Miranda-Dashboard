import React from 'react';
import { contactData } from '../../../data/contact';
import { StyledCardInfo } from '../../styled-components/HomeSlider';

// Tipado de props
type CardReviewProps = {
  subject: string;
  comment: string;
  name: string;
  email: string;
  phone: string;
};

export default function CardReview({ subject, comment, name, email, phone }: CardReviewProps) {
  return (
    <div className="card-review">
      <div className="card-review__container">
        <div className="card-review__container__text">
          <h4>{subject}</h4>
          <p>{comment}</p>
          <StyledCardInfo className="card-review__container__text__author">
            {name}
            {email}
            <p>{phone}</p>
          </StyledCardInfo>
        </div>
      </div>
    </div>
  );
}
