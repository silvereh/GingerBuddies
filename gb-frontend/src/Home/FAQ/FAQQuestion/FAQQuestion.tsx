import React from "react";

import './FAQQuestion.scss';

type FAQQuestionProps = JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
}

const FAQQuestion = ( props: FAQQuestionProps ) => {
  return (
    <div className="FAQQuestion d-flex" data-testid="FAQQuestion">
      <h3 className="FAQQuestion-heading">{ props.children }</h3>
    </div>
  );
}

export default FAQQuestion;
