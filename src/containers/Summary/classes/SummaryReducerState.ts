class SummaryReducerState {
  name?: string;

  email?: string;

  symptoms?: string[];

  lastVisit?: string

  constructor( 
    name?: string,
    email?: string,
    symptoms?: string[],
    lastVisit?: string
    ) {
    this.name = name || '';
    this.email = email || '';
    this.symptoms = symptoms || [];
    this.lastVisit = lastVisit || '';
  }
}

export default SummaryReducerState;
