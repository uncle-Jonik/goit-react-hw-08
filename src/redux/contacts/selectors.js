import { createSelector } from '@reduxjs/toolkit';

export const selectItems = state => state.contacts.items;

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filters.name;

export const selectVisibleUsers = createSelector([selectItems, selectFilter], (items, filter) => {
  return items.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()));
});
