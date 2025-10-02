import posthog from 'posthog-js';

posthog.init('phc_Juzu2eHWTrEj0lvwv4mYwtkt97EvSdmRjgm4HFdNVYH', {
  api_host: 'https://us.i.posthog.com',
  person_profiles: 'identified_only',
  capture_pageview: true,
  capture_pageleave: true,
});
