import { createAction, props } from "@ngrx/store";

const ACTION_LOGIN_REQUEST = '[auth action] login request';
const ACTION_LOGIN_SUCCESS = '[auth action] login success';
const ACTION_LOGIN_FAIL = '[auth action] login fail';

export const loginRequestAction = createAction(ACTION_LOGIN_REQUEST, props<{email: string, password: string}>())
export const loginSuccessAction = createAction(ACTION_LOGIN_SUCCESS)
export const loginFailAction = createAction(ACTION_LOGIN_FAIL)