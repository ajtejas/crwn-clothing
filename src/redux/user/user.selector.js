import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentIUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
