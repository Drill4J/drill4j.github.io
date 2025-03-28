import React from 'react';
import theme from 'prism-react-renderer/themes/github';
import Highlight, { defaultProps } from 'prism-react-renderer';

const exampleCode = `
  <Highlight {...defaultProps} code={exampleCode} language="jsx">
    {({
      className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
          ))}
      </pre>
    )}
  </Highlight>
`;

export const Codeblock = ({ language, children }) => {
  const code = typeof children === 'string' ? children.trim() : '';
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
