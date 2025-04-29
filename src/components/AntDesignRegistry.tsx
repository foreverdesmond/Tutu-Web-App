'use client';

import React from 'react';
import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs';
import { useServerInsertedHTML } from 'next/navigation';

export default function AntDesignRegistry({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[] | null;
}) {
  const cache = React.useMemo(() => createCache(), []);
  
  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });
  
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
} 