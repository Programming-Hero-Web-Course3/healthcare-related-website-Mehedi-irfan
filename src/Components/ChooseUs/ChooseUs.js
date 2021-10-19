import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div>
          <div className='text-center chooseUS-section'>
          <h4 className='choose-text'>Why Choose Us</h4>
          <h1>Providing Care For The Sickest</h1>
          </div>
          {/* choose us\ */}
          <div className="row w-100 container mx-auto pb-5 gy-3">
              {/* frist col\ */}
              <div className="col-lg-4">
                  <div className='choose-card'>
                      <span><i class="fas fa-user-md card-icon"></i></span>
                      <h4 className='card-title'>Qualified Doctors</h4>
                      <p className='card-desc'>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. Whatever you’re doing to bring new patients into your practice or optical shop, it comes at a cost. </p>
                      <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                  </div>
              </div>
              {/* second col\ */}
              <div className="col-lg-4">
              <div className='choose-card'>
                      <span><i class="fas fa-eye card-icon"></i></span>
                      <h4 className='card-title'>Eye Examination</h4>
                      <p className='card-desc'>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. Whatever you’re doing to bring new patients into your practice or optical shop, it comes at a cost. </p>
                      <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                  </div>
              </div>
              {/* third col\ */}
              <div className="col-lg-4">
              <div className='choose-card'>
                      <span><i class="fab fa-skyatlas card-icon"></i></span>
                      <h4 className='card-title'>Laser Eye Correction</h4>
                      <p className='card-desc'>In-network providers discount their services in order to access patients through vision-plan directories. Out-of-network providers set aside budgets to leverage various marketing channels. Whatever you’re doing to bring new patients into your practice or optical shop, it comes at a cost. </p>
                      <button className='btn-view'>View Details <span><i class="fas fa-arrow-right ms-1 fs-6 mt-2"></i></span></button>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default ChooseUs;