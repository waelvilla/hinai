import { describe, expect, it } from 'vitest';
import { initialGreetingInstructions } from './greeting';

describe('initial greeting instructions', () => {
  it('asks whether the user is ready to hear about pricing design changes', () => {
    expect(initialGreetingInstructions).toContain(
      "Hi, I'm here to talk to you about the new product pricing design changes. Are you ready for me to describe the changes for you?",
    );
  });
});
