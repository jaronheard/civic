import { createSelector } from "reselect";
import { rootState } from "../selectors";

export const getDiveDeeperIntoTransportationDataRequest = createSelector(
  rootState,
  ({ DiveDeeperIntoTransportationData }) => DiveDeeperIntoTransportationData
);

export const getDiveDeeperIntoTransportationData = createSelector(
  getDiveDeeperIntoTransportationDataRequest,
  ({ data }) => data
);

export const isDiveDeeperIntoTransportationDataPending = createSelector(
  getDiveDeeperIntoTransportationDataRequest,
  ({ pending }) => !!pending
);

export const catchDiveDeeperIntoTransportationDataErrors = createSelector(
  getDiveDeeperIntoTransportationDataRequest,
  ({ error }) => error || error
);
