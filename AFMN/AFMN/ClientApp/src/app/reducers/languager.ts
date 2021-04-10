import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";

export const changeLang = createAction('[LANGUAGER] changeLang');

export interface LanguagerState {
  Lang: string;
}

export const initialState: LanguagerState = {
  Lang: 'en'
};

export const languagerReducer = createReducer(
  initialState,
  on(changeLang, state => ({
    ...state,
    Lang: state.Lang == 'en' ? 'ru' : 'en'
  }))
);

export const featureSelector = createFeatureSelector<LanguagerState>('languager');
export const langSelector = createSelector(
  featureSelector,
  state => state.Lang
)
