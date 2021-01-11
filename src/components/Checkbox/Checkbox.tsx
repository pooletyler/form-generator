import React, { FC } from 'react';
import { QuestionConfig } from '../../types/form';
import './Checkbox.scss';

interface Props {
  config?: QuestionConfig;
  onChange?: (value: string | boolean) => void;
}

const Checkbox: FC<Props> = (props: Props) => {
  const { config, onChange } = props;

  const handleChange = () => {
    onChange(!config.Value);
  };

  return (
    <div className="Checkbox-container">
      <input
        type="checkbox"
        id={String(config.QuestionID)}
        checked={(config.Value && true) || false}
        onChange={handleChange}
      />
      <label className="Checkbox-label" htmlFor={String(config.QuestionID)}>
        {config.Label}
      </label>
    </div>
  );
};

Checkbox.defaultProps = {
  config: null,
  onChange: () => {},
};

export default Checkbox;
