import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Progress from '../../components/Progress/Progress';
import Page from '../../components/Page/Page';
import { setConfig, setPage } from './actionCreators/form.actionCreators';
import {
  answerQuestion,
  calculateProgress,
  changePage,
  gatherAnswers,
  showElement,
} from './actions/form.actions';
import './Form.scss';
import Submit from '../../components/Submit/Submit';

const Form: FC<any> = () => {
  const { config, page } = useSelector((selectors: any) => selectors.form);
  const dispatch = useDispatch();

  const handlePreviousPageClick = () => {
    changePage(dispatch, page, -1, setPage);
  };

  const handleNextPageClick = () => {
    changePage(dispatch, page, 1, setPage);
  };

  const handleAnswerQuestion = (
    page: number,
    section: number,
    question: number,
    value: string | boolean
  ) => {
    answerQuestion(dispatch, config, page, section, question, value, setConfig);
  };

  const handleSubmitClick = () => {
    console.log(gatherAnswers(config))
  }

  return (
    <div className="Form-container">
      <div className="Form-progressContainer">
        <Progress percent={calculateProgress(page, config.length)} />
      </div>
      <div className="Form-pageContainer">
        {showElement(page, config.length) && (
          <Page
            config={config[page]}
            page={page}
            onAnswerQuestion={handleAnswerQuestion}
          />
        )}
        {!showElement(page, config.length) && (
          <Submit config={config} onAnswerQuestion={handleAnswerQuestion} />
        )}
      </div>
      <div className="Form-buttonsContainer">
        {showElement(page, 0) && showElement(page, config.length) && (
          <Button
            label="<<<< Prev"
            color="Red"
            onClick={handlePreviousPageClick}
          />
        )}

        {(showElement(page, config.length) && (
          <Button
            label="Next >>>>"
            color="Blue"
            onClick={handleNextPageClick}
          />
        )) || <Button label="Submit" color="Blue" onClick={handleSubmitClick} />}
      </div>
    </div>
  );
};

Form.defaultProps = {
  config: null,
};

export default Form;
