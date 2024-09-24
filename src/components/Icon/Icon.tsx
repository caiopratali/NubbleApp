import React from 'react';
import { EyeOnIcon } from '../../assets/icons/eyeOnIcon';
import { EyeOffIcon } from '../../assets/icons/eyeOffIcon';
import { ThemeColors } from '../../theme/theme';
import { UseAppTheme } from '../../hooks/useAppTheme';

export interface IconBase {
    size?: number;
    color?: string;
}

interface Props {
    name: IconName;
    color?: ThemeColors;
    size: number;
}

export function Icon({ name, color = 'backgroundContrast', size}: Props) {

    const { colors } = UseAppTheme();

    const SVGIcon = iconRegistry[name];

    return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;
