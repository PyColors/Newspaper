import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import H1 from '../components/ui/H1';
import H2 from '../components/ui/H2';

import SatusPanel from '../components/ui/SatusPanel';

import HeaderHome from '../components/ui/HeaderHome';
import Button from '../components/ui/Button';

/*
storiesOf('Button', module)
	.add('with text', () =>
		<Button onClick={action('clicked')}>Hello Button</Button>
	)
	.add('with some emoji', () =>
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	);
*/
storiesOf('HeaderHome', module).add('Header Home', () =>
  <HeaderHome>Header on Home Page</HeaderHome>
);

storiesOf('H1', module).add('H1', () => <H1>I am a title</H1>);
storiesOf('H2', module).add('H2', () => <H2>I am a subtitle</H2>);

storiesOf('HeaderHome', module).add('Title', () =>
  <HeaderHome>SatusPanel</HeaderHome>
);
storiesOf('SatusPanel Success', module).add('Success', () =>
  <SatusPanel success>Satus Panel success</SatusPanel>
);
storiesOf('Satus Panel Danger', module).add('Danger', () =>
  <SatusPanel danger>Satus Panel danger</SatusPanel>
);
storiesOf('Satus Panel Warning', module).add('Warning', () =>
  <SatusPanel warning>Satus Panel warning</SatusPanel>
);
storiesOf('Satus Panel Info', module).add('Info', () =>
  <SatusPanel info>Satus Panel info</SatusPanel>
);

storiesOf('Button', module).add('with text', () =>
  <Button onClick={action('clicked')}>Hello Button</Button>
);
