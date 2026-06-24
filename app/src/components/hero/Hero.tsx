import React from 'react';
import { View, Text } from 'react-native';
import StatusLabel from "../statusLabel/StatusLabel";
import styles from './style';


type HeroProps = {
    tittle: string;
    subtittle: string;
    status: boolean;
};

function Hero({ tittle, subtittle, status }: HeroProps) {
    return (
        <View style={styles.hero}>
            <View style={styles.heroRackDeco}>
                {Array.from({ length: 7 }, (_, i) => (
                    <View key={i} style={[styles.rackseg, i < 2 && styles.racksegOcc]} />
                ))}
            </View>
            <Text style={styles.heroEyebrow}>object id: {subtittle}</Text>
            <Text style={styles.heroName}>{tittle}</Text>
            <StatusLabel status={status}/>
        </View>
    );
}

export default Hero;