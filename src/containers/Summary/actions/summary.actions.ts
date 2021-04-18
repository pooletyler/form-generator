import { Dispatch } from 'react';

export const getData = async (
  dispatch: Dispatch<any>,
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setSymptoms: (symptoms: string[]) => void,
  setLastVisit: (lastVisit: string) => void
) => {
  const response = await fetch('YOUR URL HERE', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const body: any = response.json
  const { name, email, symptoms, lastVisit } = body;

  dispatch(setName(name));
  dispatch(setEmail(email));
  dispatch(setSymptoms(symptoms));
  dispatch(setLastVisit(lastVisit));
};
