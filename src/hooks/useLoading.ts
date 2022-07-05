import { makeVar } from '@apollo/client';
import { useEffect } from 'react';

export const loadingState = makeVar<boolean>(false);

export const useLoading = (loading: boolean) => {
  useEffect(() => {
    loadingState(loading);
  }, [loading]);
};
