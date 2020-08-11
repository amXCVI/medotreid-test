import React from 'react';

export const iconTypes = {
  arrowRight: 'ARROW_RIGHT',
  arrowLeft: 'ARROW_LEFT',
}

export default function IcTurnIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="60" height="60" rx="30" fill="#11448F" fillOpacity="0.122241" />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
        <rect width="60" height="60" rx="30" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path fillRule="evenodd" clipRule="evenodd" d="M40.375 33.25C40.9273 33.25 41.375 32.8023 41.375 32.25V16.75C41.375 16.1977 40.9273 15.75 40.375 15.75H19.625C19.0727 15.75 18.625 16.1977 18.625 16.75V32.25C18.625 32.8023 19.0727 33.25 19.625 33.25H40.375ZM39.625 31.5H20.375V17.5H39.625V31.5ZM23.875 28H36.125V21H23.875V28ZM43 43.75C43.5523 43.75 44 43.3023 44 42.75V38.5C44 37.5339 43.6582 36.709 42.9746 36.0254C42.291 35.3418 41.4661 35 40.5 35H19.5C18.5339 35 17.709 35.3418 17.0254 36.0254C16.3418 36.709 16 37.5339 16 38.5V42.75C16 43.3023 16.4477 43.75 17 43.75H43ZM17.75 42H42.25V38.5C42.25 38.026 42.0768 37.6159 41.7305 37.2695C41.3841 36.9232 40.974 36.75 40.5 36.75H19.5C19.026 36.75 18.6159 36.9232 18.2695 37.2695C17.9232 37.6159 17.75 38.026 17.75 38.5V42ZM23.875 40.25V38.5H20.375V40.25H23.875ZM39.625 38.5V40.25H30.875V38.5H39.625Z" fill="#11448F" />
        <path d="M37.05 29.2V19.7H22.8V29.2H37.05Z" fill="#FF1146" />
      </g>
    </svg>

  )
};