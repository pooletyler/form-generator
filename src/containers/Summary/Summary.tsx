import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Review from 'src/components/Review/Review';
import { setEmail, setLastVisit, setName, setSymptoms } from './actionCreators/summary.actionCreators';
import { getData } from './actions/summary.actions';
import './Summary.scss';

const Summary: FC<any> = () => {
  const { name, email, symptoms, lastVisit } = useSelector((selectors: any) => selectors.summary);
  const dispatch = useDispatch();

  useEffect(() => {
    getData(dispatch, setName, setEmail, setSymptoms, setLastVisit);
  }, [])

  return (
    <div className="Summary-container">
      <div className="Summary-reviewContainer">
        <Review name={name} email={email} symptoms={symptoms} lastVisit={lastVisit} />
      </div>
    </div>
  );
};

Summary.defaultProps = {};

export default Summary;
