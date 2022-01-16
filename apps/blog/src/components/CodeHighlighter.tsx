// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import highlightStyle from '../utils/codeHighlightStyle';
import shouldHighlight from '../utils/shouldHighlight';

type Props = {
  className: string;
  added?: string;
  removed?: string;
  filename?: string;
  children: string;
};

type PreProps = {
  children: React.ReactNode;
};

const CODE_ADDED_COLOR = '#043E2F';
const CODE_REMOVED_COLOR = '#831843';

const Code = (props: Props) => {
  const match = /language-(\w+)/.exec(props.className || '');

  return (
    <SyntaxHighlighter
      language={Array.isArray(match) ? match[1] : ''}
      style={highlightStyle}
      PreTag={function Pre({ children }: PreProps) {
        return (
          <div className='bg-neutral-900 pb-4 text-md font-medium border border-zinc-600 rounded-lg'>
            {props.filename && (
              <div className='bg-zinc-800 mb-5 flex rounded-t-lg'>
                <div className='pt-3 px-4 pb-1 text-base font-medium text-gray-300 border-b border-zinc-400'>
                  <span className='font-sans text-sm lg:text-base'>
                    {props.filename}
                  </span>
                </div>
                <div className='flex-1 h-8 self-end bg-zinc-700 rounded-tl-sm border border-r-0 border-zinc-600' />
              </div>
            )}
            <div>{children}</div>
          </div>
        );
      }}
      showLineNumbers={true}
      wrapLines={true}
      lineNumberStyle={() => ({
        visibility: 'hidden',
        minWidth: 0,
        padding: 0,
      })}
      lineProps={(lineNumber: number) => {
        let backgroundColor;
        if (props.added && shouldHighlight(lineNumber, props.added)) {
          backgroundColor = CODE_ADDED_COLOR;
        } else if (
          props.removed &&
          shouldHighlight(lineNumber, props.removed)
        ) {
          backgroundColor = CODE_REMOVED_COLOR;
        }
        return {
          style: {
            display: 'block',
            backgroundColor,
          },
        };
      }}
    >
      {props.children && String(props.children).trim()}
    </SyntaxHighlighter>
  );
};

export default Code;
