import React, { FC } from 'react';
import { QuestionConfig, SectionConfig } from '../../types/form';
import Question from '../Question/Question';
import './Section.scss';

interface Props {
  config?: SectionConfig;
  page?: number;
  section?: number;
  onAnswerQuestion?: (
    page: number,
    section: number,
    question: number,
    value: string | boolean
  ) => void;
}

const Section: FC<Props> = (props: Props) => {
  const { config, page, section, onAnswerQuestion } = props;

  return (
    <div className="Section-container">
      <div className="Section-title">{config.Label}</div>
      <div className="Section-questionsContainer">
        {config.Questions.map((question: QuestionConfig, index: number) => {
          return (
            <div
              className={'Section-questionContainer'}
              key={question.QuestionID}
            >
              <Question
                config={question}
                page={page}
                section={section}
                question={index}
                onAnswerQuestion={onAnswerQuestion}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Section.defaultProps = {
  config: null,
  page: 0,
  section: 0,
  onAnswerQuestion: () => {},
};

export default Section;
