/**
 * Asynchronously loads the component for HomePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import styled from 'styled-components/macro';
import { LoadingWrapper } from 'app/components/LoadingWrapper';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  {
    fallback: (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    ),
  },
);
