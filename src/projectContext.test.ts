import { describe, expect, it } from 'vitest';
import { agentInstructions } from './agent';
import { pricingPageProjectContext } from './projectContext';

describe('pricing page project context', () => {
  it('documents the demo packages and prices', () => {
    expect(pricingPageProjectContext).toContain('Starter: Nineteen dollars per month');
    expect(pricingPageProjectContext).toContain('Pro: Forty-nine dollars per month');
    expect(pricingPageProjectContext).toContain(
      'Business: One hundred forty-nine dollars per month',
    );
    expect(pricingPageProjectContext).toContain('Enterprise: Custom pricing');
  });

  it('keeps the project context in the agent instructions', () => {
    expect(agentInstructions).toContain('Project Pricing Page Redesign');
    expect(agentInstructions).toContain('Treat the project context as the source of truth');
    expect(agentInstructions).toContain('Do not invent additional packages, prices');
  });
});
