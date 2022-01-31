import React from 'react';

import { FAQPanel } from './FAQPanel';
import { FAQQuestion } from './FAQQuestion';
import { FAQAnswer } from './FAQAnswer';

const FAQ = ( { children }: { children ?: React.ReactNode } ) => (
	{ children }
);

FAQ.Panel    = FAQPanel;
FAQ.Question = FAQQuestion;
FAQ.Answer   = FAQAnswer;

export default FAQ;
