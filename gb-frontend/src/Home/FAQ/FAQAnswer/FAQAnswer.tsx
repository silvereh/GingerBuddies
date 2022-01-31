import React from "react";

import './FAQAnswer.scss';

type FAQAnswerProps = JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
}

const FAQAnswer = ( props: FAQAnswerProps ) => {
  return (
    <div className={ `FAQAnswer d-flex` } data-testid="FAQAnswer">
      <div className="FAQAnswer-content">{ props.children }</div>
    </div>
  );
}

export default FAQAnswer;
