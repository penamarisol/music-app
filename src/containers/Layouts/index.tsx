import { PageLayout } from '$/components/templates/PageLayout';
import React, { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <PageLayout>{children}</PageLayout>
);
