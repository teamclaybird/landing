'use client';

import { useEffect } from 'react';
import Intercom from '@intercom/messenger-js-sdk';

export function IntercomProvider() {
  useEffect(() => {
    // Initialize Intercom
    Intercom({
      app_id: 'fukcudc7',
      action_color: '#ffffff', // White background
      background_color: '#000000', // Black foreground/icon
    });
  }, []);

  return null;
}
