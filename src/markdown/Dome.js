import React from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';

const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;

const Dome = () => {
  return (
    <MarkdownEditor
      height="600px"
      value={mdStr}
      onChange={(value, viewUpdate) => {

      }}
    />
  )
};

export default Dome;