import React, { FC } from 'react';
import { QuestionConfig } from '../../types/form';
import Checkbox from '../Checkbox/Checkbox';
import InlineRadioButton from '../InlineRadioButton/InlineRadioButton';
import Label from '../Label/Label';
import TextBox from '../TextBox/TextBox';
import './Question.scss';

interface Props {
  config?: QuestionConfig;
  page?: number;
  section?: number;
  question?: number;
  onAnswerQuestion?: (
    page: number,
    section: number,
    question: number,
    value: string | boolean
  ) => void;
}

const Question: FC<Props> = (props: Props) => {
  const { config, page, section, question, onAnswerQuestion } = props;

  const handleAnswerQuestion = (value: string | boolean) => {
    onAnswerQuestion(page, section, question, value);
  };

  switch (config.UI) {
    case 'cb':
      return <Checkbox config={config} onChange={handleAnswerQuestion} />;
    case 'lb':
      return <Label config={config} />;
    case 'rbil':
      return (
        <InlineRadioButton config={config} onChange={handleAnswerQuestion} />
      );
    case 'tb':
      return <TextBox config={config} onChange={handleAnswerQuestion} />;
    default:
      return null;
  }
};

Question.defaultProps = {
  config: null,
  page: 0,
  section: 0,
  question: 0,
  onAnswerQuestion: () => {},
};

export default Question;
