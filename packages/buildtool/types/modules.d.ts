declare module '*.svg' {
  import * as React from 'react';
  import { RefAttributes } from 'react';
  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string } & RefAttributes<SVGSVGElement>
  >;

  export default ReactComponent;
}

declare module '*.sql' {
  type RawPacket = any
  const result: RawPacket[];

  export default result;
}

declare module '*.sql?unique' {
  type RawPacket = any
  const result: RawPacket;

  export default result;
}
