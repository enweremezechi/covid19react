import React from 'react';
import style from './HeroSection.module.css';

function HeroSection() {
  return (
    <div className={style.hero}>
        <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="13.5" stroke="#2B6FF3" strokeWidth="3"/>
            </svg>
        </span>
        <span>
            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.635724 7.72993C-0.806138 4.16119 2.15596 0.369873 5.96751 0.905552L31.6954 4.52137C35.507 5.05705 37.3093 9.51797 34.9396 12.551L18.9443 33.0241C16.5746 36.0572 11.8101 35.3876 10.3683 31.8189L0.635724 7.72993Z" fill="#2B6FF3" fillOpacity="0.21"/>
            </svg>
        </span>
        <div className={style.container}>
          <h1>COVID-19 Tracker</h1>
        </div>
    </div>
  )
}

export default HeroSection