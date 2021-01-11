import React, { FC } from 'react';
import { QuestionConfig } from '../../types/form';
import './Label.scss';

interface Props {
  config?: QuestionConfig;
}

const Label: FC<Props> = (props: Props) => {
  const { config } = props;

  return <div className="Label-title">{config.Label}</div>;
};

Label.defaultProps = {
  config: null,
};

export default Label;
