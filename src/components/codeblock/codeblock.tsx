import React from 'react';
import {Highlight, themes} from 'prism-react-renderer';

export const Codeblock = ({ language, children }: {language: string; children: React.ReactNode}) => {
  const code = typeof children === 'string' ? children.trim() : '';
  return (
    <Highlight theme={themes.github} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
