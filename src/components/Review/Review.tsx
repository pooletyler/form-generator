import React, { FC } from 'react';
import './Review.scss';

interface Props {
  name: string;
  email: string;
  symptoms: string[];
  lastVisit: string;
}

const Review: FC<Props> = (props: Props) => {
  const { name, email, symptoms, lastVisit } = props;

  return (
    <div className="Review-container">
      <div className="Review-title">Review your data</div>
      <div className="Review-description">
        Here is the data from your check-in today!
      </div>
      <div className="Review-infoContainer">
        <p className="Review-infoItem">Name: {name}</p>
        <p className="Review-infoItem">Email: {email}</p>
        <p className="Review-infoItem">Symptoms: {symptoms.map((symptom, index) => { return `${symptom}${index !== symptoms.length - 1 && ', ' || ''}`})}</p>
        <p className="Review-infoItem">Date of last doctors visit: {lastVisit}</p>
      </div>
    </div>
  );
};

Review.defaultProps = {};

export default Review;
