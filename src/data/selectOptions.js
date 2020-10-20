export const experienceOptions = ["junior", "mid", "senior"];
export const categoryOptionsOfferForm = [
  "javaScript",
  ".net",
  "java",
  "php",
  "python",
  "ruby",
  "mobile",
  "devOps",
  "inne",
];
export const categoryOptions = [
  { category: "all", displaTxt: "wszystkie", url: "/" },
  {
    category: "javaScript",
    displaTxt: "javaScript",
    url: "/kategoria/javaScript",
  },
  { category: ".net", displaTxt: ".net", url: "/kategoria/.net" },
  { category: "java", displaTxt: "java", url: "/kategoria/java" },
  { category: "php", displaTxt: "php", url: "/kategoria/php" },
  { category: "python", displaTxt: "python", url: "/kategoria/python" },
  { category: "ruby", displaTxt: "ruby", url: "/kategoria/ruby" },
  { category: "mobile", displaTxt: "mobile", url: "/kategoria/mobile" },
  { category: "devOps", displaTxt: "devOps", url: "/kategoria/devOps" },
  { category: "inne", displaTxt: "inne", url: "/kategoria/inne" },
];
export const sortOptions = [
  { name: "najnowsze", value: "default", url: "" },
  { name: "pensja max", value: "salary-high", url: "?sort=salary-high" },
  { name: "pensja min", value: "salary-low", url: "?sort=salary-low" },
];
