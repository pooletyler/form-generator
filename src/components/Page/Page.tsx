import React, { FC } from 'react';
import Section from '../../components/Section/Section';
import { PageConfig, SectionConfig } from '../../types/form';
import './Page.scss';

interface Props {
  config?: PageConfig;
  page?: number;
  onAnswerQuestion?: (
    page: number,
    section: number,
    question: number,
    value: string | boolean
  ) => void;
}

const Page: FC<Props> = (props: Props) => {
  const { config, page, onAnswerQuestion } = props;

  return (
    <div className="Page-container">
      <div className="Page-title">{config.Label}</div>
      <div className="Page-sectionsContainer">
        {config.Sections.map((section: SectionConfig, index: number) => {
          return (
            <Section
              config={section}
              page={page}
              section={index}
              onAnswerQuestion={onAnswerQuestion}
              key={section.SectionID}
            />
          );
        })}
      </div>
    </div>
  );
};

Page.defaultProps = {
  config: null,
  page: 0,
  onAnswerQuestion: () => {},
};

export default Page;
