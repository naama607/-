import React from 'react';
import ScreenTitle from './ScreenTitle';

function RatingScreen() {
  const [rating, setRating] = React.useState(0);

  return (
    <section className="screen-card">
      <ScreenTitle title="שלב 7: סיום נסיעה ודירוג" subtitle="הדירוג יוצג כאן" />
      <div className="screen-body">
        <div className="rating-area">
          <h3>איך הייתה הנסיעה עם יהודה?</h3>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
          <p className="muted-text">הדירוג שנבחר: {rating} מתוך 5</p>
        </div>
      </div>
    </section>
  );
}

export default RatingScreen;
