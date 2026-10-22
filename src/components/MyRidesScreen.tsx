import React from 'react';
import ScreenTitle from './ScreenTitle';
import { upcomingRides } from './RideData';

function MyRidesScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="הנסיעות שלי" subtitle="נסיעות עתידיות שאושרו" />
      <div className="screen-body">
      <div className="card-list">
        {upcomingRides.map((ride) => (
          <article className="my-ride-card" key={ride.id}>
            <div className="my-ride-heading">
              <h3>{ride.route}</h3>
              <span className="status-badge">{ride.status}</span>
            </div>
            <p>תפקיד: {ride.role}</p>
            <p>פרטי נהג או הצעה: {ride.driverName}</p>
            <p>מועד איסוף: {ride.rideDate}, בשעה {ride.pickupTime}</p>
            <p>מחיר לנוסע: {ride.price} ₪</p>
          </article>
        ))}
      </div>
      <p className="muted-text">הנסיעות המוצגות כאן הן נתוני דוגמה.</p>
      </div>
    </section>
    </React.Fragment>
  );
}

export default MyRidesScreen;
