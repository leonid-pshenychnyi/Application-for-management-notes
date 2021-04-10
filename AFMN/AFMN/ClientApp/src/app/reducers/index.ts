import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {languagerReducer, LanguagerState} from "./languager";

export interface State {
  languager: LanguagerState;
}

export const reducers: ActionReducerMap<State> = {
  languager: languagerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
