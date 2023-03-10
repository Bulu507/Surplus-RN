import {backdrop} from './backdrop';
import {border} from './border';
import {card} from './card';
import {mainColors} from './color';
import {message} from './message';
import {text} from './text';

export const colors = {
  ...mainColors,
  primary: mainColors?.green1,
  secondary: mainColors?.green2,
  submit: mainColors.green1,
  tertiary: mainColors.grey1,
  dark: mainColors?.green2,
  danger: mainColors.red5,
  text: text,
  backdrop: backdrop,
  card: card,
  border: border,
  message: message,
};
