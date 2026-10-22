import React from 'react';
import ScreenTitle from './ScreenTitle';
import DriverCard from './DriverCard';
import { drivers } from './RideData';

function SearchResultsScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="שלב 3: תוצאות חיפוש" subtitle="נהגים מתאימים" />
      <div className="screen-body">
      <div className="card-list">
        {drivers.map((driver) => (
          <DriverCard key={driver.id} driver={driver} />
        ))}
      </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default SearchResultsScreen;
