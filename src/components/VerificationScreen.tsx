import React from 'react';
import ScreenTitle from './ScreenTitle';

function VerificationScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="שלב 1: אימות זהות ומסמכים" subtitle="שלב ראשוני" />
      <div className="screen-body">
      <div className="form-grid">
        <label className="field">
          שם מלא:
          <input type="text" placeholder="לדוגמה: דני לוי" />
        </label>
        <label className="field">
          מספר טלפון:
          <input type="tel" placeholder="050-0000000" />
        </label>
        <label className="upload-box">
          🪪 צילום תעודת זהות
          <input type="file" />
        </label>
        <label className="upload-box">
          🚗 צילום רישיון נהיגה
          <input type="file" />
        </label>
      </div>
      <button className="primary-button" type="button">שלח לאימות מערכת</button>
      </div>
    </section>
    </React.Fragment>
  );
}

export default VerificationScreen;
