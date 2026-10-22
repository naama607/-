import React from 'react';

interface DriverCardProps {
  driver: {
    id: number;
    name: string;
    car: string;
    rating: number;
    reviewCount: number;
    pickupTime: string;
    duration: string;
    arrivalTime: string;
    price: number;
    deposit: number;
  };
}

function DriverCard(props: DriverCardProps) {
  const driver = props.driver;

  return (
    <React.Fragment>
    <article className="info-box">
      <h3>{driver.name} ✓</h3>
      <p>רישיון מאומת · ★ {driver.rating} ({driver.reviewCount} דירוגים)</p>
      <p>{driver.car}</p>
      <p>🚗 איסוף: {driver.pickupTime} · ⏱️ משך: {driver.duration}</p>
      <p>🏁 הגעה משוערת: {driver.arrivalTime}</p>
      <strong>מחיר: {driver.price} ₪ (מקדמה {driver.deposit} ₪)</strong>
      <button className="primary-button" type="button">בחירת נהג</button>
    </article>
    </React.Fragment>
  );
}

export default DriverCard;
