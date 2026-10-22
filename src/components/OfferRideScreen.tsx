import React from 'react';
import ScreenTitle from './ScreenTitle';

function OfferRideScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="הצעת נסיעה" subtitle="לנהגים שרוצים להציע מקומות פנויים" />
      <div className="screen-body">
      <div className="form-grid">
        <label className="field">
          נקודת מוצא:
          <input type="text" placeholder="עיר או כתובת" />
        </label>
        <label className="field">
          יעד:
          <input type="text" placeholder="עיר או כתובת" />
        </label>
        <label className="field">
          תאריך:
          <input type="date" />
        </label>
        <label className="field">
          שעת יציאה:
          <input type="time" />
        </label>
        <label className="field">
          מקומות פנויים:
          <select>
            <option value="1">מקום אחד</option>
            <option value="2">2 מקומות</option>
            <option value="3">3 מקומות</option>
          </select>
        </label>
        <label className="field">
          מחיר לנוסע:
          <input type="number" placeholder="לדוגמה: 40 ₪" />
        </label>
      </div>
      <p className="field-title">העדפות בנסיעה:</p>
      <div className="choice-list">
        {[
          { id: 1, name: 'ללא עישון' },
          { id: 2, name: 'אפשר להביא מטען' },
          { id: 3, name: 'נסיעה שקטה' },
        ].map((preference) => (
          <label className="choice" key={preference.id}>
            <input type="checkbox" />
            {preference.name}
          </label>
        ))}
      </div>
      <p className="muted-text">טופס תצוגה בלבד — פרסום הנסיעה אינו נשלח למערכת.</p>
      </div>
    </section>
    </React.Fragment>
  );
}

export default OfferRideScreen;
