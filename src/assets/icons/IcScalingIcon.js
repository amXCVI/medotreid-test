import React from 'react';

export const iconTypes = {
  arrowRight: 'ARROW_RIGHT',
  arrowLeft: 'ARROW_LEFT',
}

export default function IcScalingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width="24" height="24" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 13.5V3.5H18.25V13.5H19.5V3.25C19.5 2.69772 19.0523 2.25 18.5 2.25H5.5C4.94772 2.25 4.5 2.69772 4.5 3.25V13.5H5.75ZM15.75 7.25V6H8.25V7.25H15.75ZM15.75 9.75V11H8.25V9.75H15.75ZM21 22.25C21.5523 22.25 22 21.8023 22 21.25V15.75C22 15.1977 21.5523 14.75 21 14.75H15.5C14.9477 14.75 14.5 15.1977 14.5 15.75V16.625H9.5V15.75C9.5 15.1977 9.05228 14.75 8.5 14.75H3C2.44772 14.75 2 15.1977 2 15.75V21.25C2 21.8023 2.44772 22.25 3 22.25H21ZM3.25 21H20.75V16H15.75V17.875H8.25V16H3.25V21Z" fill="#11448F" />
    </svg>
  )
};