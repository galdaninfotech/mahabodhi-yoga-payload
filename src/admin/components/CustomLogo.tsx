import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const CustomLogo: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginLeft: '0px' }}>
      <Image
        width="177"
        height="76"
        src="/images/admin-logo.png"
        alt=""
      />
    </div>
  );
}

export default CustomLogo;