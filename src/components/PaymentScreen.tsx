import React from 'react';
import ScreenTitle from './ScreenTitle';

function PaymentScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="שלב 5: תשלום מקדמה" subtitle="אפשרויות תשלום לדוגמה" />
      <div className="screen-body">
      <div className="payment-amount">סכום מקדמה לשריון: <strong>15.00 ₪</strong></div>
      <div className="payment-option">
        <strong>📲 תשלום מהיר באפליקציית Bit</strong>
        <button className="primary-button" type="button">שלם 15 ₪ באפליקציית Bit</button>
      </div>
      <div className="payment-option">
        <strong>🏛️ העברה בנקאית</strong>
        <p>פועלים (12) | סניף 612 | חשבון 458921</p>
        <label className="upload-box">
          העלאת אסמכתה לדוגמה
          <input type="file" />
        </label>
      </div>
      <p className="muted-text">המסכים מציגים דוגמה בלבד. אין כאן תשלום אמיתי.</p>
      </div>
    </section>
    </React.Fragment>
  );
}

export default PaymentScreen;
