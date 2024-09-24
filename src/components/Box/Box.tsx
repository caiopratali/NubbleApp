import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import {
    layout,
    border,
    spacing,
    createBox,
    BorderProps,
    LayoutProps,
    SpacingProps,
    backgroundColor,
    spacingShorthand,
    BackgroundColorProps,
    SpacingShorthandProps,
    createRestyleComponent,
} from '@shopify/restyle';

import { Theme } from '../../theme/theme';

export const Box = createBox<Theme>();
export type SRBoxProps = React.ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = TouchableOpacityProps
    & BackgroundColorProps<Theme>
    & SpacingShorthandProps<Theme>
    & SpacingProps<Theme>
    & LayoutProps<Theme>
    & BorderProps<Theme>;

export const TouchableOpacityBox = createRestyleComponent<TouchableOpacityBoxProps, Theme>([
    spacingShorthand,
    backgroundColor,
    spacing,
    layout,
    border,
], TouchableOpacity);
