const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ben Jaros",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo4LCJub3NlIjo0LCJtb3V0aCI6MTcsImV5ZXMiOjAsImV5ZWJyb3dzIjozLCJnbGFzc2VzIjoxMCwiaGFpciI6MzUsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MSwiY29sb3IiOiJyZ2JhKDI1NSwgMCwgMCwgMCkiLCJzaGFwZSI6Im5vbmUifQ==", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Economics PhD Candidate",
    bio: "SALT Economist",
    email: "bjaros@clemson.edu",
    linkedin: "https://www.linkedin.com/in/benjamin-jaros-a3a318121/",
    github: "bjaros20",
    instagram: "",
  },
  projects: [
    {
      name: `Personal Website`,
      href: "https://github.com/bjaros20/Personal_Website.git",
    },
  ],
  // blog setting (required)
  blog: {
    title: "SALT Blog",
    description: "Blog on items with some armchair economist thoughts, generally in the tax space.",
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
