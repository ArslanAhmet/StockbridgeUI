import { createAction, props } from '@ngrx/store';
import { PersonItem } from '../../../../shared/models';

export const createPerson = createAction(
  '[Persons PAGE] CREATE_PERSON',
  props<{ payload: PersonItem }>(),
);

export const setPaginationHeader = createAction(
  '[Persons PAGE] Set Pagination Header',
  props<{ payload: string }>(),
);
