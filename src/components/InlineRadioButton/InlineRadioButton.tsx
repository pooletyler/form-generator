import React, { FC } from 'react';
import { QuestionConfig, QuestionOptionConfig } from '../../types/form';
import './InlineRadioButton.scss';

interface Props {
  config?: QuestionConfig;
  onChange?: (value: string | boolean) => void;
}

const InlineRadioButton: FC<Props> = (props: Props) => {
  const { config, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="InlineRadioButton-container">
      <div className="InlineRadioButton-title">{config.Label}</div>
      {config.Options.map(
        (radioButton: QuestionOptionConfig, index: number) => {
          return (
            <div
              className="InlineRadioButton-radioButton"
              key={`questionOption-${index}`}
            >
              <input
                className="InlineRadioButton-input"
                type="radio"
                id={String(radioButton.QuestionOptionID)}
                name={String(radioButton.QuestionID)}
                value={radioButton.Value}
                checked={config.Value === radioButton.Value}
                onChange={handleChange}
              />
              <label
                htmlFor={String(radioButton.QuestionOptionID)}
                className="InlineRadioButton-label"
              >
                {radioButton.Description}
              </label>
            </div>
          );
        }
      )}
    </div>
  );
};

InlineRadioButton.defaultProps = {
  config: null,
  onChange: () => {},
};

export default InlineRadioButton;
