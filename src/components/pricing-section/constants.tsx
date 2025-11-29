import Link from "next/link";

const descriptionAnnually = "per user/month, billed annually";
const descriptionMonthly = "per user/month, billed monthly";

export const cards = [
  {
    title: "Free",
    annually: {
      cost: "$0",
      discount: null,
      description: descriptionAnnually,
    },
    monthly: {
      cost: "$0",
      discount: null,
      description: descriptionMonthly,
    },
    content: {
      title: "For Small Teams",
      list: [
        "Real-time contact syncing",
        "Automatic data enrichment",
        "Up to 3 seats",
      ],
    },
    callToAction: <Link href="/getstarted">Get Started</Link>,
  },
  {
    title: "Basic",
    annually: {
      cost: "$39",
      discount: "-15%",
      description: descriptionAnnually,
    },
    monthly: {
      cost: "$45",
      discount: null,
      description: descriptionMonthly,
    },
    content: {
      title: "For Growing Teams",
      list: ["Private lists", "Enhanced email sending", "No seat limits"],
    },
    callToAction: <Link href="/getstarted">Get Started</Link>,
  },
  {
    title: "Pro",
    annually: {
      cost: "$59",
      discount: "-15%",
      description: descriptionAnnually,
    },
    monthly: {
      cost: "$69",
      discount: null,
      description: descriptionMonthly,
    },
    content: {
      title: "For Scaling Businesses",
      list: [
        "Fully adjustable permissions",
        "Advanced data enrichment",
        "Priority support",
        "No seat limits",
      ],
    },
    callToAction: <Link href="/getstarted">Get Started</Link>,
  },
  {
    title: "Enterprise",
    annually: {
      cost: "$129",
      discount: null,
      description: descriptionAnnually,
    },
    monthly: {
      cost: "$129",
      discount: null,
      description: descriptionMonthly,
    },
    content: {
      title: "For Big Corporation",
      list: [
        "Unlimited reporting",
        "SAML and SSO",
        "Custom billing",
        "No seat limits",
      ],
    },
    callToAction: <Link href="/sales">Contact Our Sales</Link>,
  },
];
