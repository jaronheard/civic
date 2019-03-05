/*
 *
 * Services211 constants
 *
 */

export const NAME = 'services211';
export const NON_ACTION_TYPE = '30px';

export const INITIAL_STATE = {};

const GET_SERVICE_CALLS = 'HOMELESSNESS/SERVICES211/SERVICE_CALLS/GET';
const GET_SERVICE_CALLS_SUCCESS =
  'HOMELESSNESS/SERVICES211/SERVICE_CALLS/GET/SUCCESS';
const GET_SERVICE_CALLS_FAILURE =
  'HOMELESSNESS/SERVICES211/SERVICE_CALLS/GET/FAILURE';

export const actionTypes = {
  GET_SERVICE_CALLS,
  GET_SERVICE_CALLS_SUCCESS,
  GET_SERVICE_CALLS_FAILURE,
};
