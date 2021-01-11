import React, { FC } from 'react';
import './Progress.scss';

interface Props {
  percent?: number;
}

const Progress: FC<Props> = (props: Props) => {
  const { percent } = props;

  return (
    <div className="Progress-container">
      <span className="Progress-text">Progress: {percent}%</span>
    </div>
  );
};

Progress.defaultProps = {
  percent: 0,
};

export default Progress;
