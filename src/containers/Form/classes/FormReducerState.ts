import { PageConfig } from '../../../types/form';

const defaultConfig = require('../../../data/form.json');

class FormReducerState {
  config?: PageConfig[];

  page?: number;

  constructor(config?: PageConfig[], page?: number) {
    this.config = config || defaultConfig;
    this.page = page || 0;
  }
}

export default FormReducerState;
