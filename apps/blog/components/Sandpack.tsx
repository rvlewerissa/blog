import { Sandpack as RawSandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';

export default function Sandpack(props) {
  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: 800 }}>
      <RawSandpack {...props} />
    </div>
  );
}
