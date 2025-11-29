import { PricingInfo, TData } from "./model";

export const rawData: { [key: string]: PricingInfo[] } = {
  Workspace: [
    {
      feature: {
        name: "Number of seats",
        tooltip: null,
      },
      free: "Up to 3",
      basic: "Unlimited",
      pro: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      feature: { name: "Number of objects", tooltip: null },
      free: "Up to 3",
      basic: "Up to 8",
      pro: "Up to 12",
      enterprise: "Unlimited",
    },
  ],
  Automations: [
    {
      feature: {
        name: "Number of credits",
        tooltip: "Credits are used for automation API requests",
      },
      free: "200",
      basic: "2000",
      pro: "4000",
      enterprise: "5000+",
    },
  ],
  "Email and Calendar": [
    {
      feature: {
        name: "Email and calendar sync",
        tooltip:
          "You can sync email and calendar services such as Google Calendar, Calendly, Apple Calendar and others.",
      },
      free: "1 account per user",
      basic: "2 account per user",
      pro: "4 account per user",
      enterprise: "10+ account per user",
    },
    {
      feature: {
        name: "Email sharing",
        tooltip:
          "Email Sharing allows you to easily manage discussion around emails, using comments, without multiple forwards and replies",
      },
      free: "Individual metadata",
      basic: "Individual attachments",
      pro: "Specific contacts",
      enterprise: "Specific contacts",
    },
    {
      feature: {
        name: "Email sends amount",
        tooltip: null,
      },
      free: "500 sends per month",
      basic: "1000 sends per month",
      pro: "Unlimited",
      enterprise: "Unlimited",
    },
    {
      feature: {
        name: "Bulk email sending",
        tooltip: null,
      },
      free: "10 sends at a time",
      basic: "20 sends at a time",
      pro: "50 sends at a time",
      enterprise: "100 sends at a time",
    },
    {
      feature: {
        name: "Remove email watermark",
        tooltip: null,
      },
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
  ],
  Reporting: [
    {
      feature: {
        name: "Number of reports",
        tooltip: null,
      },
      free: "3 reports",
      basic: "20 reports",
      pro: "100 reports",
      enterprise: "Unlimited",
    },
    {
      feature: {
        name: "Insight Reports",
        tooltip: null,
      },
      free: true,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Sales Reports",
        tooltip: null,
      },
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Activity Reports",
        tooltip: null,
      },
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Email Reports",
        tooltip: null,
      },
      free: false,
      basic: false,
      pro: true,
      enterprise: true,
    },
  ],
  "Data Model": [
    {
      feature: {
        name: "Access permissions",
        tooltip: null,
      },
      free: "Fully visible",
      basic: "Private",
      pro: "Advanced",
      enterprise: "Advanced",
    },
  ],
  Admin: [
    {
      feature: {
        name: "Payment invoice",
        tooltip: null,
      },
      free: false,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "SAML (SSO)",
        tooltip: null,
      },
      free: false,
      basic: false,
      pro: true,
      enterprise: true,
    },
  ],
  Support: [
    {
      feature: {
        name: "Help center",
        tooltip: "Help center is online 24/7",
      },
      free: true,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Chat and email support",
        tooltip: "Chat and email support are online 24/7",
      },
      free: true,
      basic: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Priority support",
        tooltip: null,
      },
      free: false,
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: {
        name: "Migration assistance",
        tooltip: "Our experts will help you migrate from other services",
      },
      free: false,
      basic: "Chat with us",
      pro: "Chat with us",
      enterprise: "Chat with us",
    },
  ],
};

export const data: TData[] = Object.keys(rawData).flatMap((section) => {
  const header: TData = { isSectionTitle: true, title: section };
  const rows: TData[] = rawData[section as keyof typeof rawData].map((row) => ({
    isSectionTitle: false,
    ...row,
  }));
  return ([header] as TData[]).concat(rows);
});
