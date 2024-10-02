import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import { small_fund } from '../../../data/data';

Modal.setAppElement('#root');

const AvgFund = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContentPopup = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeContentPopup = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <section className='py-14'>
      <div className="max-w-screen-xl px-4 mx-auto text-gray-600 md:px-8">
  <div className="relative max-w-xl mx-auto sm:text-center">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
        ChitFunds
      </span>{" "}
      10 Months !
    </h3>
    <div className="max-w-xl mt-3">
      <p className="text-base sm:text-lg">
        Ignite your wealth journey with a transformative investment experience, blending growth, strategy, and financial prosperity like never before!
      </p>
    </div>
  </div>
  <div className="justify-center gap-6 mt-16 space-y-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
    {small_fund.map((product, idx) => (
      <div key={idx} className="relative flex flex-col items-stretch flex-1 p-8 border-2 rounded-xl">
        <div>
          <h4 className="text-lg font-medium text-center text-black">
            Chit Schema
          </h4>
          <p className="mt-4 text-2xl font-semibold text-gray-800">
            ₹{product.amount}
          </p>
          <p className="text-sm text-gray-600">{product.timeline}</p>
        </div>
        <div className="py-6 space-y-3">
          {product.additionalInfo && (
            <div className="flex items-center gap-5">
              {/** Details */}
              <div className="flex flex-col">
                <span className="text-base">Monthly Pay: ₹{product.monthlypay}</span>
                <span className="text-base">Daily Pay: ₹{product.dailypay}</span>
                <span className="text-base">Weekly Pay: ₹{product.weeklypay}</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-end flex-1">
          <Button
            className="w-full px-3 py-3 text-sm font-semibold duration-150 rounded-lg cta-view-more-product"
            onClick={() => openContentPopup(product)}
          >
            More Details
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>


      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeContentPopup}
        contentLabel="Additional Information"
        className="cta-popup-product"
      >
        {selectedProduct && selectedProduct.imageSrc && (
          <div className="main-content">
            {/* Display image */}
            <img
              src={selectedProduct.imageSrc}
              alt="Additional Information"
              className="additional-info-image"
            />

            {/* Close button */}
            <Button
              className="cta-btn"
              variant="outlined"
              onClick={closeContentPopup}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
}

export default AvgFund;
