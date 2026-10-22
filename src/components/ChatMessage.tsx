import React from 'react';

interface ChatMessageProps {
  message: {
    id: number;
    name: string;
    role: string;
    message: string;
    sentByPassenger: boolean;
  };
}

function ChatMessage(props: ChatMessageProps) {
  const message = props.message;

  return (
    <React.Fragment>
    <article className="chat-message">
      <strong>{message.name} ({message.role})</strong>
      <p>{message.message}</p>
    </article>
    </React.Fragment>
  );
}

export default ChatMessage;
