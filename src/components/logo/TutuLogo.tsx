'use client';

import React from 'react';
import Image from 'next/image';

interface TutuLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const TutuLogo: React.FC<TutuLogoProps> = ({ 
  width = 32, 
  height = 32, 
  className = '' 
}) => {
  return (
    <Image
      src="/images/logo.png"
      alt="Tutu Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};

export default TutuLogo; 