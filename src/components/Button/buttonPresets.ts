import { ButtonPreset } from './Button';
import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

interface ButtonUI {
    container: TouchableOpacityBoxProps;
    content: ThemeColors;
}

export const buttonPresets: Record<ButtonPreset, {
    default: ButtonUI;
    disabled: ButtonUI;
}> = {
    primary: {
        default: {
            container: {
                backgroundColor: 'buttonPrimary',
            },
            content: 'primaryContrast',
        },
        disabled: {
            container: {
                backgroundColor: 'gray4',
            },
            content: 'gray2',
        },
    },
    outline: {
        default: {
            container: {
                borderWidth: 1,
                borderColor: 'buttonPrimary',
            },
            content: 'buttonPrimary',
        },
        disabled: {
            container: {
                borderWidth: 1,
                borderColor: 'gray4',
            },
            content: 'gray2',
        },
    },
};
