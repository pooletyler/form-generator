import React, { FC } from 'react';
import './Button.scss';

interface Props {
  label?: string;
  color?: 'Red' | 'Blue';
  onClick?: () => void;
}

const Button: FC<Props> = (props: Props) => {
  const { label, color, onClick } = props;

  return (
    <button className={`Button-button Button-button${color}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: '',
  color: 'Red',
  onClick: () => {},
};

export default Button;
