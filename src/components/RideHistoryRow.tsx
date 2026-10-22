import React from 'react';

interface RideHistoryRowProps {
  ride: {
    id: number;
    description: string;
    payment: string;
    status: string;
  };
}

function RideHistoryRow(props: RideHistoryRowProps) {
  return (
    <React.Fragment>
    <article className="history-row">
      <strong>{props.ride.description}</strong>
      <span>{props.ride.payment}</span>
      <span className="status-badge">{props.ride.status}</span>
    </article>
    </React.Fragment>
  );
}

export default RideHistoryRow;
