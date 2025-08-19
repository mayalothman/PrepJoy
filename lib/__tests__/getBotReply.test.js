const { describe, it } = require('node:test');
const assert = require('node:assert');
const { getBotReply } = require('../getBotReply.js');

describe('getBotReply', () => {
  it('dairy free', () => {
    assert.strictEqual(getBotReply('dairy free'), "Okay! I'll mark some meals as dairy-free.");
  });

  it('hello', () => {
    assert.strictEqual(getBotReply('hello'), "Hello! How can I help you with your meal plan?");
  });

  it('unknown input', () => {
    assert.strictEqual(getBotReply("what's up?"), "I'm still learning! Try asking about allergies, meals, or groceries.");
  });
});
