
import React from 'react';
import SideTab from './SideTab';
import { Benefitcontent, Benefitoptions } from '../../../data/data';

function Benefit() {
  return (
    <div className='mx-5 lg:mx-16'>
  <h1 className="mt-8 mb-4 text-2xl lg:text-3xl font-bold text-center text-gray-800">
    Key <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900'>Benefits</span>
  </h1>
  <SideTab options={Benefitoptions} contentData={Benefitcontent} />
</div>

  );
}

export default Benefit;
