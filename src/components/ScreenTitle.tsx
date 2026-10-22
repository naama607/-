import React from 'react';

interface ScreenTitleProps {
  title: string;
  subtitle: string;
}

function ScreenTitle(props: ScreenTitleProps) {
  return (
    <React.Fragment>
    <div className="screen-header">
      <strong>{props.title}</strong>
      <span>{props.subtitle}</span>
    </div>
    </React.Fragment>
  );
}

export default ScreenTitle;
