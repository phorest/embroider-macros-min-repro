import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | app', function (hooks) {
  setupApplicationTest(hooks);

  test('isTesting', async function (assert) {
    await visit('/');

    assert.ok(document.querySelector('body').innerText.includes('Yes, I am'));
  });
});
