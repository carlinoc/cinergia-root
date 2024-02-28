// Import necessary dependencies and types
import React from 'react';
import { InputSearchProps } from '../Inputs.model';

/**
 * InputSearch Component
 *
 * A React component representing a search input. It supports different variants for small (SM) and large (LG) screens.
 *
 * @component
 * @param {InputSearchProps} props - Props for the InputSearch component.
 * @param {string} [props.variant='LG'] - The variant of the input (SM or LG).
 * @returns {JSX.Element} - JSX element representing the InputSearch component.
 */

export function InputSearch({
  variant = 'LG',
  ...InputSearchProps
}: InputSearchProps) {
  // Function to render the search input
  const renderInput = () => (
    <input
      type="search"
      placeholder="Buscar..."
      className={`w-full h-full ${
        variant === 'SM' ? 'p-2' : 'px-4 py-1'
      } bg-transparent focus:outline-none focus:border-none`}
      {...InputSearchProps}
    />
  );
  /**
   * Render the JSX for the InputSearch component
   */
  return (
    <span
      className={`overflow-hidden flex justify-center items-center gap-1 w-full rounded-md bg-dark-700 text-textColorNeutral-50${
        variant === 'SM' ? 'pr-1 pl-2' : 'p-0'
      }`}
    >
      {variant === 'SM' ? (
        /* Render search icon and input for small screen */

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
            {/* Render input and search button for large screen */}
          </svg>
          {renderInput()}
        </>
      ) : (
        <>
          {renderInput()}
          <button
            type="button"
            className="button-text py-2 px-4 rounded-none bg-dark-700"
            title="Buscar"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </>
      )}
    </span>
  );
}
