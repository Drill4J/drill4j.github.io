import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

export const TextInput = connectSearchBox(({ currentRefinement, refine }) => (
  <input
    className="w-full h-6 box-border py-1 px-2 text-12 rounded-lg border border-monochrome-dark-tint outline-none"
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
));
