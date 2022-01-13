import { Sandpack as RawSandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

type Props = React.ComponentProps<typeof RawSandpack>;

export default function Sandpack(props: Props) {
  return (
    <div>
      <RawSandpack {...props} />
    </div>
  );
}
