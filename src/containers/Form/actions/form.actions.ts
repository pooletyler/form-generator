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
