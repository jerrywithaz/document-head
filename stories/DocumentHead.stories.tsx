import React from 'react';
import { DocumentHead } from '../src';

export default {
  title: 'DocumentHead',
  component: DocumentHead,
};

const JQueryScript = (props: React.ScriptHTMLAttributes<HTMLScriptElement>) => (
  <script
    {...props}
    src="https://code.jquery.com/jquery-3.5.0.js"
    integrity="sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=" />
);

export const DocumentHeadStory = () => {

  function onJqueryScriptLoad() {
    console.log("loaded");
  }

  return (
    <DocumentHead>
      <JQueryScript onLoad={onJqueryScriptLoad}/>
    </DocumentHead>
  );
  
};

DocumentHeadStory.story = {
  name: 'Document Head',
};
