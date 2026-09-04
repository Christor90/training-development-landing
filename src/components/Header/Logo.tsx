

import React from 'react';
import Image from 'next/image';
import tobamslog from '../../../public/logo.png'

export default function Logo() {
  return (
    <div className="flex items-center flex-shrink-0">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <Image src={tobamslog} alt="TOBAMS GROUP Logo" width={200} height={200} loading="eager"/>
      </div>
    </div>
  );
}