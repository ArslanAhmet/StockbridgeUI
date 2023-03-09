import { createAction, props } from '@ngrx/store';
import { ModelDescriptor, PersonItem } from '../../../../shared/models';

export const createPersonSuccess = createAction(
  '[Persons API] CREATE_PERSON_SUCCESS',
  props<{ payload: PersonItem }>(),
);

export const createPersonFailure = createAction(
  '[Person API] Create Person Fail',
  props<{ error: string }>()
);
