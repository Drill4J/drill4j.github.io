import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import algoliasearch from 'algoliasearch';
import {
  Configure, connectSearchBox, Highlight, Hits, InstantSearch,
} from 'react-instantsearch-dom';
import clsx from 'clsx';

import { useClickOutside } from '../../hooks';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76',
);

interface HitProps {
  hit?: { name?: string };
}

const Hit = ({ hit }: HitProps) => (
  <div
    className={clsx(
      'px-2 py-1 border-b border-monochrome-medium-tint',
      'text-ellipsis font-regulars text-monochrome-black hover:bg-monochrome-medium-tint cursor-pointer',
    )}
    title={hit?.name}
  >
    <Highlight attribute="name" hit={hit} />
  </div>
);

const TextInput = connectSearchBox(({ currentRefinement, refine }) => (
  <input
    className="w-full h-6 box-border py-1 px-2 text-12 rounded-lg border border-monochrome-dark-tint outline-none"
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
  />
));

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <InstantSearch
      indexName="instant_search"
      searchClient={searchClient}
      onSearchStateChange={(s) => setIsOpen(Boolean(s.query))}
    >
      <>
        <TextInput />
        <Configure hitsPerPage={4} distinct />
        {isOpen && createPortal(
          <div
            ref={ref}
            className={clsx('absolute top-24 left-2 z-10 max-w-3xl',
              'border border-monochrome-medium-tint bg-monochrome-white last:border-b-0')}
          >
            <Hits hitComponent={Hit} />
          </div>,
          document.body,
        )}
      </>
    </InstantSearch>
  );
};
