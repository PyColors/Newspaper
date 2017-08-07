import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';

import H1 from '../components/ui/H1';
import HeaderHome from '../components/ui/HeaderHome';
import Button from '../components/ui/Button';

storiesOf('Welcome', module).add('to Storybook', () =>
  <Welcome showApp={linkTo('Button')} />
);

storiesOf('Button', module)
  .add('with text', () =>
    <Button onClick={action('clicked')}>Hello Button</Button>
  )
  .add('with some emoji', () =>
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  );

storiesOf('HeaderHome', module).add('Title', () =>
  <HeaderHome>Header on Home Page</HeaderHome>
);

storiesOf('H1', module).add('Title', () => <H1>I am a titlte</H1>);

storiesOf('Button', module).add('Title', () => <Button>I am a Button</Button>);
