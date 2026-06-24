import React from 'react';
import { View, StatusBar, ImageSourcePropType } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../utils/colors';
import CoidsBadge from '../badge/CoidsBadge';
import { styles } from './style';

interface TopProps {
  children?: React.ReactNode;
  badgeImage?: ImageSourcePropType;
}

function Top({ children, badgeImage }: TopProps) {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.wrapper}>
            <View style={[styles.statusBarFill, { height: insets.top }]} />
            <StatusBar barStyle="light-content" backgroundColor={colors.backgroundtop} />
            <SafeAreaView>
              {badgeImage && (
                <CoidsBadge size="line" imageSource={badgeImage} />
              )}
              {children}
            </SafeAreaView>
        </View>
    );
}

export default Top;