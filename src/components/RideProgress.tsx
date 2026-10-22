import React from 'react';

interface ProgressStep {
  id: number;
  title: string;
  className: string;
}

const steps: ProgressStep[] = [
  { id: 1, title: 'אימות מסמכים', className: 'progress-step active' },
  { id: 2, title: 'הגדרת נסיעה', className: 'progress-step' },
  { id: 3, title: 'תוצאות חיפוש', className: 'progress-step' },
  { id: 4, title: 'צ׳אט', className: 'progress-step' },
  { id: 5, title: 'תשלום', className: 'progress-step' },
  { id: 6, title: 'היסטוריה', className: 'progress-step' },
  { id: 7, title: 'דירוג', className: 'progress-step' },
];

function RideProgress() {
  return (
    <React.Fragment>
    <section className="progress-card">
      <h2 className="progress-title">התקדמות הנסיעה</h2>
      <ol className="progress-list">
        {steps.map((step) => (
          <li key={step.id} className={step.className}>
            <span className="progress-number">{step.id}</span>
            <span>{step.title}</span>
          </li>
        ))}
      </ol>
    </section>
    </React.Fragment>
  );
}

export default RideProgress;
