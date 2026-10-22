import React from 'react';
import ScreenTitle from './ScreenTitle';

const days = [
  { id: 1, name: 'א׳' },
  { id: 2, name: 'ב׳' },
  { id: 3, name: 'ג׳' },
  { id: 4, name: 'ד׳' },
  { id: 5, name: 'ה׳' },
  { id: 6, name: 'ו׳' },
];

const preferences = [
  { id: 1, name: 'ללא עישון' },
  { id: 2, name: 'חיות מחמד' },
  { id: 3, name: 'נסיעה שקטה' },
  { id: 4, name: 'נשים בלבד' },
];

function RideDetailsScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="שלב 2: הגדרת נסיעה" subtitle="פרטי המסלול וההעדפות" />
      <div className="screen-body">
      <div className="form-grid">
        <label className="field">
          סוג הנסיעה:
          <select>
            <option>קבועה (חודשית)</option>
             <option>קבועה (שבועית)</option>
            <option>חד-פעמית</option>
          </select>
        </label>
        <label className="field">
          נקודת מוצא:
          <input type="text" placeholder="עיר או כתובת" />
        </label>
        <label className="field">
          יעד נסיעה:
          <input type="text" placeholder="עיר או כתובת" />
        </label>
        <label className="field">
          שעת איסוף:
          <input type="time" />
        </label>
        <label className="field">
          גמישות בשעות:
          <select>
            <option value="15">±15 דקות</option>
            <option value="30">±30 דקות</option>
          </select>
        </label>
        <label className="field">
          מספר נוסעים:
          <select>
            <option value="1">נוסע אחד</option>
            <option value="2">שני נוסעים</option>
            <option value="3">שלושה נוסעים</option>
            <option value="4">ארבעה נוסעים</option>
            <option value="5">חמישה נוסעים</option>
          </select>
        </label>
        <label className="field">
          גודל מטען:
          <select>
            <option>מזוודה בינונית</option>
            <option>תיק גב בלבד</option>
          </select>
        </label>
      </div>
      <p className="field-title">ימי נסיעה:</p>
      <div className="choice-list">
        {days.map((day) => (
          <label className="choice" key={day.id}>
            <input type="checkbox" />
            {day.name}
          </label>
        ))}
      </div>
      <p className="field-title">העדפות מיוחדות:</p>
      <div className="choice-list">
        {preferences.map((preference) => (
          <label className="choice" key={preference.id}>
            <input type="checkbox" />
            {preference.name}
          </label>
        ))}
      </div>
      <div className="info-box">
        <strong>📍 נתוני נסיעה לדוגמה (Waze)</strong>
        <span>מרחק: 62 ק״מ</span>
        <span>זמן משוער: שעה ו־10 דקות</span>
      </div>
      <button className="primary-button" type="button">חפש נהגים מתאימים 🔍</button>
      </div>
    </section>
    </React.Fragment>
  );
}

export default RideDetailsScreen;
