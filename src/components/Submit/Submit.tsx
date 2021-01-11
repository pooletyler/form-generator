import React, { FC } from 'react';
import { PageConfig, QuestionConfig, SectionConfig } from '../../types/form';
import Question from '../Question/Question';
import './Submit.scss';

interface Props {
  config?: PageConfig[];
  onAnswerQuestion?: (
    page: number,
    section: number,
    question: number,
    value: string | boolean
  ) => void;
}

const Submit: FC<Props> = (props: Props) => {
  const { config, onAnswerQuestion } = props;

  return (
    <div className="Submit-container">
      <div className="Submit-title">Submit your answers</div>
      <div className="Submit-description">
        Review your answers before submitting!
      </div>
      {config.map((page: PageConfig, pageIndex: number) => {
        return page.Sections.map(
          (section: SectionConfig, sectionIndex: number) => {
            return section.Questions.map(
              (question: QuestionConfig, questionIndex: number) => {
                return (
                  <div
                    className="Submit-questionContainer"
                    key={question.QuestionID}
                  >
                    <Question
                      config={question}
                      page={pageIndex}
                      section={sectionIndex}
                      question={questionIndex}
                      onAnswerQuestion={onAnswerQuestion}
                    />
                  </div>
                );
              }
            );
          }
        );
      })}
    </div>
  );
};

Submit.defaultProps = {
  config: [],
  onAnswerQuestion: () => {},
};

export default Submit;
