import React from 'react';
import ScreenTitle from './ScreenTitle';
import RideHistoryRow from './RideHistoryRow';
import { rideHistory } from './RideData';

function HistoryScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="היסטוריית נסיעות" subtitle="נסיעות ואישורים" />
      <div className="screen-body">
      <div className="card-list">
        {rideHistory.map((ride) => (
          <RideHistoryRow key={ride.id} ride={ride} />
        ))}
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default HistoryScreen;
