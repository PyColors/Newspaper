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

import Label from '../components/ui/Label';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';

/*
storiesOf('Button', module)
	.add('with text', () =>
		<Button onClick={action('clicked')}>Hello Button</Button>
	)
	.add('with some emoji', () =>
		<Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
	);
*/

storiesOf('H1', module).add('H1', () => <H1>I am a title</H1>);
storiesOf('H2', module).add('H2', () => <H2>I am a subtitle</H2>);

storiesOf('HeaderHome', module).add('Header Home', () =>
  <HeaderHome>Header on Home Page</HeaderHome>
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

storiesOf('Buttons', module)
  .add('primaryOne', () =>
    <Button primaryOne onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('primaryOneOutline', () =>
    <Button primaryOneOutline onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('primaryTwo', () =>
    <Button primaryTwo onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('primaryTwoOutline', () =>
    <Button primaryTwoOutline onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('secondaryOne', () =>
    <Button secondaryOne onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('secondaryOneOutline', () =>
    <Button secondaryOneOutline onClick={action('clicked')}>
      Hello Button
    </Button>
  )
  .add('disabled', () =>
    <Button disabled onClick={action('clicked')}>
      Hello Button
    </Button>
  );

storiesOf('Label', module).add('Label', () =>
  <Label title="Label TItle">Label</Label>
);

storiesOf('Input', module).add('Input', () => <Input>Label</Input>);

storiesOf('Textarea', module).add('Textarea', () => <Textarea>Label</Textarea>);
