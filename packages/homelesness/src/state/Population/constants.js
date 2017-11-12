/*
 *
 * Population constants
 *
 */

export const NAME = 'population';
export const NON_ACTION_TYPE = '30px';

export const INITIAL_STATE = {
};

const GET_ETHNICITY = 'HOMELESSNESS/POPULATION/ETHNICITY/GET';
const GET_ETHNICITY_SUCCESS = 'HOMELESSNESS/POPULATION/ETHNICITY/GET/SUCCESS';
const GET_ETHNICITY_FAILURE = 'HOMELESSNESS/POPULATION/ETHNICITY/GET/FAILURE';
const GET_AGE_GENDER = 'HOMELESSNESS/POPULATION/AGE_GENDER/GET';
const GET_AGE_GENDER_SUCCESS = 'HOMELESSNESS/POPULATION/AGE_GENDER/GET/SUCCESS';
const GET_AGE_GENDER_FAILURE = 'HOMELESSNESS/POPULATION/AGE_GENDER/GET/FAILURE';

export const actionTypes = {
  GET_ETHNICITY,
  GET_ETHNICITY_SUCCESS,
  GET_ETHNICITY_FAILURE,
  GET_AGE_GENDER,
  GET_AGE_GENDER_SUCCESS,
  GET_AGE_GENDER_FAILURE,
};