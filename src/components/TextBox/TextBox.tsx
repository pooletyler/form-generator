import React, { FC } from 'react';
import { QuestionConfig } from '../../types/form';
import './TextBox.scss';

interface Props {
  config?: QuestionConfig;
  onChange?: (value: string | boolean) => void;
}

const TextBox: FC<Props> = (props: Props) => {
  const { config, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="TextBox-container">
      <input
        type="text"
        id={String(config.QuestionID)}
        value={(typeof config.Value === 'string' && config.Value) || ''}
        onChange={handleChange}
      />
      <label className="TextBox-label" htmlFor={String(config.QuestionID)}>
        {config.Label}
      </label>
    </div>
  );
};

TextBox.defaultProps = {
  config: null,
  onChange: () => {},
};

export default TextBox;
