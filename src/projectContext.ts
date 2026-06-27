import { dedent } from '@livekit/agents';

export const pricingPageProjectContext = dedent`
  # Demo project context

  The user is asking about a hard-coded demo project: a UI design for a SaaS pricing page.

  Project name: Project Pricing Page Redesign
  Goal: Design a clear, conversion-focused pricing page that helps visitors compare packages quickly and choose the right plan.
  Audience: Small teams, growing businesses, and enterprise buyers evaluating a design collaboration product.

  Packages and pricing:

  - Starter: Nineteen dollars per month, or one hundred ninety dollars per year. Includes one workspace, up to five team members, three active projects, basic templates, community support, and standard export options.
  - Pro: Forty-nine dollars per month, or four hundred ninety dollars per year. Includes everything in Starter, plus up to twenty-five team members, unlimited active projects, advanced templates, version history, priority support, and custom brand kits.
  - Business: One hundred forty-nine dollars per month, or one thousand four hundred ninety dollars per year. Includes everything in Pro, plus up to one hundred team members, approval workflows, analytics, shared design systems, single sign-on, and dedicated onboarding.
  - Enterprise: Custom pricing. Includes everything in Business, plus unlimited team members, custom security reviews, procurement support, custom legal terms, uptime commitments, and a dedicated success manager.

  Pricing page design notes:

  - The Pro package should be visually marked as the recommended option.
  - Show monthly pricing by default, with a yearly toggle that highlights roughly two months free.
  - Keep package comparison short above the fold, then provide a detailed feature comparison lower on the page.
  - Use a primary call to action of "Start free trial" for Starter, Pro, and Business.
  - Use a primary call to action of "Contact sales" for Enterprise.
  - Emphasize clarity, trust, and quick scanning over dense marketing copy.
`;
