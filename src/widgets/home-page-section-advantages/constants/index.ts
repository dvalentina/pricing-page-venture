const imageSrc = (name: string) => `/home-page-advantages-${name}.png`;

export const advantages = [
  {
    title: "Effortless Data Management",
    description:
      "Simplify centralizing customer data for easy access, updates, and analysis, providing a comprehensive clientele overview.",
    imageSrc: imageSrc("data-management"),
  },
  {
    title: "Contact Management",
    description:
      "Easily organize and track all contacts in one place, with categorized and updated details for top-notch customer service.",
    imageSrc: imageSrc("contact-management"),
  },
  {
    title: "Enhanced Customer Insights",
    description:
      "Enhance customer understanding with advanced CRM analytics, delving deeper into preferences and behaviors.",
    imageSrc: imageSrc("customer-insights"),
  },
];
