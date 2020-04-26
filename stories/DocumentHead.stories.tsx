import React from 'react';
import { DocumentHead } from '../src';

export default {
  title: 'DocumentHead',
  component: DocumentHead,
};

export const DocumentHeadStory = () => (
  <DocumentHead>
    <script type="text/javascript" src="https://www.google.com"></script>
  </DocumentHead>
);

DocumentHeadStory.story = {
  name: 'Document Head',
};
