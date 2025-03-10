import mixpanel from "mixpanel-browser";

const mixpanelProjectToken = "5248efa97c1d172da726740598f101fe";
  mixpanel.init(mixpanelProjectToken, {
    debug: true,
    track_pageview: true,
    persistence: "localStorage",
  });

const logEvent = (eventName: string, eventProperties?: any) => {
  eventProperties = eventProperties || {};
  mixpanel.track(eventName, eventProperties);
};

export const handleCustomButtonClickWithAnalytics = (
  originalClick: any,
  event: any,
  action: string
) => {
  if (originalClick) {
    originalClick(event);
  }
  logEvent("Button Click", { action });
};
