import tape from 'tape';
import addAssertions from 'extend-tape';
import jsxEquals from 'tape-jsx-equals';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import { App } from '../app/components/app';

const test = addAssertions(tape, { jsxEquals });
const renderer = createRenderer();

// case 1 when it is set as active
test('Simple rendering', (assert) => {
	renderer.render(<App />);

	const message = 'Root component should render itself';
	const expected = '<h1>Hello!</h1>';
	const actual = renderer.getRenderOutput();

	assert.jsxEquals(actual, expected, message);

	assert.end();
});