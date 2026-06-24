import {colors} from "../../utils/colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
        hero: {
            backgroundColor: colors.primary,
            borderRadius: 16,
            padding: 18,
            overflow: 'hidden',
            position: 'relative',
        },
        heroRackDeco: {
            position: 'absolute',
            right: 14,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            gap: 4,
            opacity: 0.15,
        },
        rackseg: {
            width: 44,
            height: 8,
            backgroundColor: colors.backgroundDark,
            borderRadius: 3
        },
        racksegOcc: {
            backgroundColor: colors.backgroundDark
        },
        heroEyebrow: {
            fontSize: 11,
            color: colors.textOnDark,
            letterSpacing: 1,
            marginBottom: 4
        },
        heroName: {
            fontSize: 28,
            fontWeight: '700',
            color: colors.textOnDark
        },
    }
);
