import React from 'react';

const iframeStyle = {
  width: '100%',
  height: 500,
  border: 0,
  borderRadius: 4,
  overflow: 'hidden',
};

const VueSandbox = () => (
  <iframe
    src="https://codesandbox.io/embed/50njmzy69p?fontsize=14"
    title="Vue Template"
    style={iframeStyle}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
);

export default VueSandbox;
