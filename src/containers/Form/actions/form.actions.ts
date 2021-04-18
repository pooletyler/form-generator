import { Dispatch } from 'react';
import { PageConfig } from '../../../types/form';

export const changePage = (
  dispatch: Dispatch<any>,
  page: number,
  increment: number,
  setPage: (page: number) => void
) => {
  dispatch(setPage(page + increment));
};

export const calculateProgress = (current: number, total: number) => {
  return (current / total) * 100;
};

export const showElement = (page: number, limit: number) => {
  if (page === limit) {
    return false;
  }

  return true;
};

export const answerQuestion = (
  dispatch: Dispatch<any>,
  config: PageConfig[],
  page: number,
  section: number,
  question: number,
  value: boolean | string,
  setConfig: (config: PageConfig[]) => void
) => {
  const newConfig = [...config];

  newConfig[page].Sections[section].Questions[question].Value = value;

  dispatch(setConfig(newConfig));
};

export const gatherAnswers = (
  config: PageConfig[],
) => {
  const answers = {};

  config.forEach((page) => {
    page.Sections.forEach((section) => {
      section.Questions.forEach((question) => {
        const { Name, Label, UI, Value } = question
        let name = undefined;
        let value = Value;

        if (Name) {
          name = Name.charAt(0).toLowerCase() + Name.slice(1);
        }

        if (UI === 'cb' && Value) {
          value = Label;
        }


        if (name && value) {
          if (answers[name]) {
            answers[name].push(value)
          } else {
            answers[name] = [value];
          }
        }
      })
    })
  })

  Object.keys(answers).forEach((key) => {
    if (answers[key].length === 1) {
      answers[key] = answers[key][0]
    }
  })

  return answers
}

export const postData = async (
  body: {}
) => {
  const response = await fetch('YOUR URL HERE', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
};
