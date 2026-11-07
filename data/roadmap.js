export const questions = [
  {
    id: "source",
    label: "Acquisition",
    title: "Where do your customers come from today?",
    hint: "Be honest — this decides whether paid ads are the right next move.",
    options: [
      {
        id: "none",
        label: "No steady leads",
        copy: "Referrals and walk-ins only. Nothing predictable yet.",
      },
      {
        id: "organic",
        label: "Organic trickle",
        copy: "Search or social brings a few enquiries, but it's inconsistent.",
      },
      {
        id: "web",
        label: "Website leads, no ads",
        copy: "The site converts a steady flow of enquiries — still no paid traffic.",
      },
      {
        id: "ads",
        label: "Ads already running",
        copy: "You spend on Meta or Google and want more from the budget.",
      },
    ],
  },
  {
    id: "budget",
    label: "Investment",
    title: "What can you invest in growth each month?",
    hint: "Ad spend plus creative. We plan around what's real, not aspirational.",
    options: [
      {
        id: "lean",
        label: "Under $500",
        copy: "Enough for one focused test — no wasted channels.",
      },
      {
        id: "steady",
        label: "$500 – $1,500",
        copy: "A proper test-to-scale cycle with room for creative.",
      },
      {
        id: "serious",
        label: "$1,500 – $5,000",
        copy: "Multiple audiences, consistent creative, retargeting.",
      },
      {
        id: "aggressive",
        label: "$5,000+",
        copy: "Scale spend — if the funnel and creative engine can absorb it.",
      },
    ],
  },
  {
    id: "bottleneck",
    label: "Bottleneck",
    title: "Where does your funnel leak the most?",
    hint: "Fixing the wrong leak is how budgets disappear.",
    options: [
      {
        id: "reach",
        label: "Not enough attention",
        copy: "We need more of the right people seeing the offer.",
      },
      {
        id: "capture",
        label: "Clicks, but few leads",
        copy: "Traffic arrives, then leaves without converting.",
      },
      {
        id: "conversion",
        label: "Leads, but they don't buy",
        copy: "Enquiries come in, but they stall before a sale.",
      },
      {
        id: "margin",
        label: "Sales, but thin profit",
        copy: "It works, but acquisition costs eat the margin.",
      },
    ],
  },
  {
    id: "goal",
    label: "90-day goal",
    title: "What does winning look like in 90 days?",
    hint: "One goal keeps the roadmap focused.",
    options: [
      {
        id: "predictable",
        label: "Predictable lead flow",
        copy: "A steady weekly pipeline we can forecast.",
      },
      {
        id: "cheaper",
        label: "Cheaper qualified leads",
        copy: "Lower cost per lead without losing quality.",
      },
      {
        id: "more-sales",
        label: "More sales from today's traffic",
        copy: "Convert the demand you already have.",
      },
      {
        id: "new-market",
        label: "A new offer or market",
        copy: "Validate a second offer, audience, or location.",
      },
    ],
  },
];

const budgetPlans = {
  lean: {
    value: "$300–450 / mo",
    rule: "Run one campaign at $10–15/day. Change one variable at a time and reinvest only after a winner proves CPL and lead quality.",
  },
  steady: {
    value: "$600–900 / mo",
    rule: "Run $20–30/day in testing. Keep roughly 70% of spend on proven ads and 30% on new creative.",
  },
  serious: {
    value: "$1,500–3,000 / mo",
    rule: "Run $50–100/day with a weekly creative pipeline. Scale in +20% steps, never in one jump.",
  },
  aggressive: {
    value: "$5,000+ / mo",
    rule: "Scale deliberately: increase spend in +20% steps and hold about 20% of budget on fresh creative.",
  },
};

const goalFocus = {
  predictable: "A pipeline you can forecast week to week.",
  cheaper: "Cost per qualified lead trending down while volume holds.",
  "more-sales": "Conversion rate from today's traffic before adding new spend.",
  "new-market": "One validated new offer or audience before scaling it.",
};

const paths = {
  foundation: {
    tag: "Foundation",
    title: "Build the engine, then pour fuel on it.",
    diagnosis:
      "You don't have a scaling problem yet — you have a distribution problem. Paid ads only accelerate a message that hasn't been proven. Over the next 90 days we sharpen one offer, build a page that captures demand, and set up tracking before testing Meta Ads with a small, disciplined budget.",
    lever: {
      title: "One offer + one capture path",
      copy: "No channel-hopping. We prove a single offer on a page built to convert, then use a tight Meta test to find the audience and creative that produce qualified leads.",
    },
    phases: [
      {
        window: "Week 1",
        title: "Sharpen the offer",
        summary: "One customer, one outcome, one measurable lead definition.",
        items: [
          "Pick one ideal customer and one measurable outcome",
          "Rewrite the offer around a result, not a service list",
          "Define a qualified lead and a target cost per lead",
          "Install GA4, Meta Pixel, and conversion events",
        ],
      },
      {
        window: "Week 2",
        title: "Build the capture path",
        summary: "A single page and instant follow-up that turn interest into enquiries.",
        items: [
          "Single-offer landing page, mobile-first",
          "Proof block: results, testimonials, process",
          "Low-friction form plus WhatsApp and email handoff",
          "Automatic first reply within 60 seconds",
        ],
      },
      {
        window: "Weeks 3–4",
        title: "Test with Meta Ads",
        summary: "A small, focused test to find the creative and audience that convert.",
        items: [
          "$10–15/day, one campaign, two audiences",
          "Three creative hooks across two formats",
          "Cut anything above target CPL after 72 hours",
          "Move budget to the first clear winner",
        ],
      },
      {
        window: "Months 2–3",
        title: "Prove, then scale",
        summary: "Scale the winners, refresh creative weekly, and report qualified leads.",
        items: [
          "Refresh creative with two new hooks each week",
          "Retarget page visitors and form openers",
          "Scale winning ad sets by +20% every three days",
          "Report spend, CPL, qualified leads, booked calls",
        ],
      },
    ],
    metrics: [
      { label: "Target CPL", value: "$5–12" },
      { label: "90-day milestone", value: "20–30 qualified leads" },
    ],
    note:
      "If the test holds CPL and lead quality for three straight weeks, the next step is the Demand capture path.",
  },

  "meta-launch": {
    tag: "Demand capture",
    title: "You've proven demand. Now buy it at will.",
    diagnosis:
      "Your website already turns attention into enquiries — that's the hardest part. The next move is paid distribution: a disciplined Meta Ads system that sends the right people into the page you've already proven, with tracking that reveals which creative and audience produce real leads rather than cheap clicks.",
    lever: {
      title: "Meta Ads — structured tests, not boosted posts",
      copy: "One clean campaign structure, weekly creative testing, retargeting on every warm audience, and conversion tracking wired end to end.",
    },
    phases: [
      {
        window: "Week 1",
        title: "Audit and instrument",
        summary: "Fix page friction and wire tracking to the leads that matter.",
        items: [
          "Audit the landing page and offer for conversion friction",
          "Connect Pixel, Conversions API, and GA4 lead events",
          "Agree the qualified-lead definition and target CPL",
          "Build a one-screen dashboard for spend and leads",
        ],
      },
      {
        window: "Week 2",
        title: "Launch the test",
        summary: "One clean campaign, two audiences, three creatives.",
        items: [
          "One campaign, two audiences, three creatives",
          "Start at $20–30/day, learning phase kept intact",
          "Offer-led hooks with social proof",
          "UTM naming so every enquiry is traceable",
        ],
      },
      {
        window: "Weeks 3–4",
        title: "Read, cut, scale",
        summary: "Kill weak ads, scale winners, and retarget warm visitors.",
        items: [
          "Pause ads above target CPL after 72 hours",
          "Scale winners by +20% every three days",
          "Retarget site visitors, engagers, and form openers",
          "Weekly report: spend, CPL, qualified leads, calls",
        ],
      },
      {
        window: "Months 2–3",
        title: "Systemise the machine",
        summary: "Fresh creative, lookalikes, and AI follow-up on a weekly loop.",
        items: [
          "Ship a fresh creative batch every two weeks",
          "Build lookalikes from qualified leads",
          "Add AI qualification and instant follow-up",
          "Raise budget only while CPL holds",
        ],
      },
    ],
    metrics: [
      { label: "Target CPL", value: "$3–8" },
      { label: "90-day milestone", value: "40+ qualified leads" },
    ],
    note:
      "If leads stay steady but close rate drops, switch the first two weeks to funnel repair before raising spend.",
  },

  "meta-scale": {
    tag: "Paid scale",
    title: "Stop managing ads. Start engineering growth.",
    diagnosis:
      "You're already in the auction, which means the next gains come from structure, creative velocity, and lead quality — not from simply increasing the budget. We audit what's leaking, consolidate spend, and build a weekly testing loop so cost per qualified lead falls as volume rises.",
    lever: {
      title: "An ads operating system",
      copy: "Account structure, a creative testing engine, and a lead-quality feedback loop that lets you raise budget without raising cost per lead.",
    },
    phases: [
      {
        window: "Week 1",
        title: "Audit the account",
        summary: "Find wasted spend and measure cost per qualified lead.",
        items: [
          "Check structure, exclusions, overlap, and attribution",
          "Audit Pixel and Conversions API event match quality",
          "Measure true cost per qualified lead, not form fills",
          "Cut wasted spend before adding any budget",
        ],
      },
      {
        window: "Week 2",
        title: "Rebuild for signal",
        summary: "Consolidate campaigns and test one variable at a time.",
        items: [
          "Consolidate campaigns so the algorithm can learn",
          "Test one variable at a time",
          "Write creative from real sales objections",
          "Rebuild retargeting across 14, 30, and 90-day windows",
        ],
      },
      {
        window: "Weeks 3–4",
        title: "Creative velocity",
        summary: "Ship new hooks weekly and scale only what earns it.",
        items: [
          "Ship three to four new hooks every week",
          "Mix UGC, founder-led, and proof-led formats",
          "Scale winners by +20% every three days",
          "Kill losers at 1.5× target CPL",
        ],
      },
      {
        window: "Months 2–3",
        title: "Scale without breaking",
        summary: "Lookalikes, automation, and a second offer — checked against CAC.",
        items: [
          "Build lookalikes from high-value customers",
          "Add AI qualification and instant follow-up",
          "Test a second offer or market",
          "Monthly P&L check: CPL, close rate, CAC",
        ],
      },
    ],
    metrics: [
      { label: "Target CPL", value: "−20% in 60 days" },
      { label: "90-day milestone", value: "2× leads at equal CPL" },
    ],
    note:
      "If creative fatigue is the real bottleneck, the testing engine runs before any budget increase.",
  },

  "funnel-repair": {
    tag: "Conversion repair",
    title: "Fix the leak before you pay for more traffic.",
    diagnosis:
      "You're generating leads, but the economics don't work yet — either too few become customers, or acquisition costs eat the margin. More ad spend would only buy more of the same problem. We fix the offer, qualify harder, and shorten response time, then re-open the tap once the funnel can absorb volume.",
    lever: {
      title: "Offer, qualification, and speed to lead",
      copy: "Conversion work comes first. Meta Ads returns only after cost per qualified lead is understood and follow-up is fast enough to convert it.",
    },
    phases: [
      {
        window: "Week 1",
        title: "Diagnose the drop-off",
        summary: "Map where leads stall and define what qualified really means.",
        items: [
          "Map lead source → conversation → sale",
          "Interview five recent leads and two lost deals",
          "Define a qualified lead precisely",
          "Measure response time and follow-up cadence",
        ],
      },
      {
        window: "Week 2",
        title: "Fix offer and page",
        summary: "Rewrite the offer and proof around the buying trigger.",
        items: [
          "Rewrite the offer around the buying trigger",
          "Rebuild proof: results, process, guarantees",
          "Clearer call to action and a lower-friction form",
          "Answer the top objections on the page",
        ],
      },
      {
        window: "Weeks 3–4",
        title: "Qualify and follow up",
        summary: "AI qualification and instant follow-up stop leads going cold.",
        items: [
          "Qualify with AI before a call is booked",
          "Instant WhatsApp and email first reply",
          "Five-touch nurture sequence",
          "Retarget warm leads who went quiet",
        ],
      },
      {
        window: "Months 2–3",
        title: "Reopen paid traffic",
        summary: "Restart Meta only when the funnel can absorb volume.",
        items: [
          "Relaunch Meta at $20–30/day",
          "Judge on cost per qualified lead",
          "Scale winners by +20% every three days",
          "Report CPL, show rate, close rate, cost per sale",
        ],
      },
    ],
    metrics: [
      { label: "Speed to lead", value: "Under 5 min" },
      { label: "90-day milestone", value: "Cost per sale −25%" },
    ],
    note:
      "Ads restart only once the fixed funnel has produced 10 qualified conversations.",
  },
};

export function getRoadmapPath(answers) {
  const { source, bottleneck } = answers;

  if (bottleneck === "conversion" || bottleneck === "margin") {
    return source === "none" ? "foundation" : "funnel-repair";
  }
  if (source === "ads") return "meta-scale";
  if (source === "web") return "meta-launch";
  return "foundation";
}

export function buildRoadmap(answers) {
  const pathKey = getRoadmapPath(answers);
  const path = paths[pathKey];
  const budget = budgetPlans[answers.budget] ?? budgetPlans.steady;

  return {
    key: pathKey,
    tag: path.tag,
    title: path.title,
    diagnosis: path.diagnosis,
    lever: path.lever,
    phases: path.phases,
    metrics: [{ label: "Monthly budget", value: budget.value }, ...path.metrics],
    budgetRule: budget.rule,
    focus: goalFocus[answers.goal] ?? goalFocus.predictable,
    note: path.note,
  };
}

export function getAnswerSummary(answers) {
  return questions.map((question) => {
    const option = question.options.find((item) => item.id === answers[question.id]);
    return {
      label: question.label,
      question: question.title,
      answer: option ? option.label : "—",
    };
  });
}
