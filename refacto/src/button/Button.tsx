import { withClickId, WithClickIdProps, compose, identity } from '../core/src';

import ButtonCore, { ButtonCoreProps } from './ButtonCore';

export type ButtonProps = WithClickIdProps<ButtonCoreProps, 'onClick'>;

const Button = compose(
  identity<ButtonCoreProps>(),
  withClickId({ event: ['onClick'] })
)(ButtonCore);

Button.displayName = 'Button';

export default Button;
