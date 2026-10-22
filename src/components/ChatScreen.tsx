import React from 'react';
import ScreenTitle from './ScreenTitle';
import ChatMessage from './ChatMessage';
import { chatMessages } from './RideData';

function ChatScreen() {
  return (
    <React.Fragment>
    <section className="screen-card">
      <ScreenTitle title="שלב 4: צ׳אט תיאום" subtitle="דוגמאות להודעות" />
      <div className="screen-body">
      <div className="info-box">
        <strong>🗺️ סטטוס תנועה לדוגמה</strong>
        <span>עומס בכביש 1 · הגעה משוערת: 16:12</span>
      </div>
      <div className="chat-list">
        {chatMessages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <p className="muted-text">הודעות לדוגמה בלבד — אין חיבור לצ׳אט אמיתי.</p>
      </div>
    </section>
    </React.Fragment>
  );
}

export default ChatScreen;
