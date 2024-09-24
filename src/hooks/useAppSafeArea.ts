import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { UseAppTheme } from './useAppTheme';

export function UseAppSafeArea() {
    const { top } = useSafeAreaInsets();
    const { spacing } = UseAppTheme();

    return {
        top: Math.max(top, spacing.s20),
    };
}
