import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import backgrounds from "@storybook/addon-backgrounds";

import SearchBar from '../src/components/SearchBar';
import MovieCard from '../src/components/MovieCard';
import Button from '../src/components/Button';
import ButtonIcon from '../src/components/ButtonIcon';
import Label from '../src/components/Label';

import '../src/normalize.less';
import '../src/style.less';

storiesOf('Components', module)
  .addDecorator(backgrounds([
    { name: "dark", value: "#0A1014", default: true },
    { name: "white", value: "#FFFFFF", default: true }
  ]))
  .add('SearchBar', () => (
    <SearchBar />
  ))
  .add('SearchBar disabled', () => (
    <SearchBar disabled={true} />
  ))
  .add('MovieCard', () => (
    <MovieCard />
  ))
  .add('Button', () => (
    <Button />
  ))
  .add('Button active', () => (
    <Button active={true} />
  ))
  .add('ButtonIcon', () => (
    <ButtonIcon />
  ))
  .add('Label', () => (
    <Label />
  ));
