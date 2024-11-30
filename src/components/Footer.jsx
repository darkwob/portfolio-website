import React from 'react';
import { styles } from '../styles';

const Footer = () => {
  return (
    <footer className='bg-black-100'>
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <div className='text-center sm:text-left'>
            <h4 className='text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]'>
              Contact Information
            </h4>
            <div className='mt-2 space-y-1'>
              <p className='text-secondary text-[12px] sm:text-[14px] hover:text-white'>
                <a href="mailto:sadiksefa@hotmail.com.tr">📧 sadiksefa@hotmail.com.tr</a>
              </p>
              <p className='text-secondary text-[12px] sm:text-[14px] hover:text-white'>
                <a href="tel:+905538119954">📞 +90 553 811 99 54</a>
              </p>
            </div>
          </div>

          <div className='text-center'>
            <h4 className='text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]'>
              Social Links
            </h4>
            <div className='mt-2 space-y-1'>
              <p className='text-secondary text-[12px] sm:text-[14px] hover:text-white'>
                <a href="https://linkedin.com/in/sadiksefa01" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
              </p>
              <p className='text-secondary text-[12px] sm:text-[14px] hover:text-white'>
                <a href="https://github.com/darkwob" target="_blank" rel="noopener noreferrer">
                  🔗 GitHub
                </a>
              </p>
            </div>
          </div>

          <div className='text-center sm:text-right'>
            <h4 className='text-white font-bold text-[16px] sm:text-[18px] md:text-[20px]'>
              Location
            </h4>
            <p className='mt-2 text-secondary text-[12px] sm:text-[14px]'>
              Adana, Turkey
            </p>
          </div>
        </div>

        <div className='mt-8 sm:mt-10 border-t border-secondary pt-4 sm:pt-6'>
          <p className='text-secondary text-[12px] sm:text-[14px] text-center'>
            © {new Date().getFullYear()} Sadık Sefa Kütük. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 