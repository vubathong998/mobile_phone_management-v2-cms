import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '~/services/store';

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
