import React, { ReactNode } from 'react';

import { PostsContextProvider } from './posts';

interface Props {
	children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <PostsContextProvider>
      {children}
    </PostsContextProvider>
  );
}
