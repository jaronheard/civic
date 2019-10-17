import { createReducer, createSelector } from "redux-starter-kit";
import teamworkBadge from "../../assets/badges/teamwork.svg";
import superTeamBadge from "../../assets/badges/super-team.svg";
import preparerBadge from "../../assets/badges/preparer.svg";
import masterPreparerBadge from "../../assets/badges/master-preparer.svg";
import taskSurvivorBadge from "../../assets/badges/task-survivor.svg";
import taskNeighborhoodHeroBadge from "../../assets/badges/task-neighborhood-hero.svg";
import taskCitySuperheroBadge from "../../assets/badges/task-city-superhero.svg";

// INITIAL STATE
// items will be a list of objects, where each object is an id and a quantity
// the id is related to the items reducer
const initialState = {
  points: 0,
  badges: {
    teamwork: {
      teamworkBadge: {
        title: "Teamwork",
        id: "teamworkBadge",
        badgeSVG: teamworkBadge,
        acquired: false
      },
      superTeamBadge: {
        title: "Super Team",
        id: "superTeamBadge",
        badgeSVG: superTeamBadge,
        acquired: false
      }
    },
    prepared: {
      preparerBadge: {
        title: "Preparer",
        id: "preparerBadge",
        badgeSVG: preparerBadge,
        acquired: false
      },
      masterPreparerBadge: {
        title: "Master Preparer",
        id: "masterPreparerBadge",
        badgeSVG: masterPreparerBadge,
        acquired: false
      }
    },
    hero: {
      taskSurvivorBadge: {
        title: "Survivor",
        id: "taskSurvivorBadge",
        badgeSVG: taskSurvivorBadge,
        acquired: false
      },
      taskNeighborhoodHeroBadge: {
        title: "Neighborhood Hero",
        id: "taskNeighborhoodHeroBadge",
        badgeSVG: taskNeighborhoodHeroBadge,
        acquired: false
      },
      taskCitySuperheroBadge: {
        title: "City Superhero",
        id: "taskCitySuperheroBadge",
        badgeSVG: taskCitySuperheroBadge,
        acquired: false
      }
    }
  }
};

// CONSTANTS

export const actionTypes = {
  SET_POINTS: "SET_POINTS",
  ADD_POINTS: "ADD_POINTS",
  RESET_STATE: "RESET_STATE",
  ADD_BADGE: "ADD_BADGE"
};

// ACTIONS
export const setPoints = points => dispatch => {
  dispatch({ type: actionTypes.SET_POINTS, points });
};

export const addPoints = points => dispatch => {
  dispatch({ type: actionTypes.ADD_POINTS, points });
};

export const resetState = () => dispatch => {
  dispatch({ type: actionTypes.RESET_STATE });
};

export const addBadge = (badgeFamily, badgeId) => dispatch => {
  dispatch({ type: actionTypes.ADD_BADGE, badgeId, badgeFamily });
};

// REDUCERS
/* eslint-disable no-param-reassign */
export const user = createReducer(initialState, {
  [actionTypes.SET_POINTS]: (state, action) => {
    state.points = action.points;
  },
  [actionTypes.ADD_POINTS]: (state, action) => {
    state.points += action.points;
  },
  [actionTypes.ADD_BADGE]: (state, action) => {
    const { badgeFamily, badgeId } = action;
    state.badges[badgeFamily][badgeId].acquired = true;
  },
  [actionTypes.RESET_STATE]: () => {
    return initialState;
  }
});
/* eslint-enable no-param-reassign */

export default user;

// SELECTORS

export const getPoints = createSelector(
  ["user.points"],
  points => points
);

/* eslint-disable no-else-return */
export const getTeamworkBadge = createSelector(
  ["user.badges.teamwork"],
  teamworkBadges => {
    if (teamworkBadges.superTeamBadge.acquired) {
      return teamworkBadges.superTeamBadge;
    } else if (teamworkBadges.teamworkBadge.acquired) {
      return teamworkBadges.teamworkBadge;
    }
    return null;
  }
);

export const getPreparedBadge = createSelector(
  ["user.badges.prepared"],
  preparedBadges => {
    if (preparedBadges.masterPreparerBadge.acquired) {
      return preparedBadges.masterPreparerBadge;
    } else if (preparedBadges.preparerBadge.acquired) {
      return preparedBadges.preparerBadge;
    }
    return null;
  }
);

export const getHeroBadge = createSelector(
  ["user.badges.hero"],
  heroBadges => {
    if (heroBadges.taskCitySuperheroBadge.acquired) {
      return heroBadges.taskCitySuperheroBadge;
    } else if (heroBadges.taskNeighborhoodHeroBadge.acquired) {
      return heroBadges.taskNeighborhoodHeroBadge;
    } else if (heroBadges.taskSurvivorBadge.acquired) {
      return heroBadges.taskSurvivorBadge;
    }
    return null;
  }
);

/* eslint-enable no-else-return */
