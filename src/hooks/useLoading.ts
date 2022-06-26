import { makeVar } from '@apollo/client';

export const loadingState = makeVar<boolean>(false);

export const useLoading = (loading: boolean) => {
  loadingState(loading);
};
