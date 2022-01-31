import React from "react";

import './FAQPanel.scss';

type FAQPanelProps = JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
}

const FAQPanel = ( props: FAQPanelProps ) => {
  return (
    <div className="FAQPanel" data-testid="FAQPanel">
      { props.children }
    </div>
  );
}

export default FAQPanel;
