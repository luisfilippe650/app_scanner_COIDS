import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { s } from "./style";
import { colors } from "../../utils/colors";

function ButtonReturn() {
    return (
        <TouchableOpacity
            style={s.topBtn}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
        >
            {/* Correção aqui: transformando a string de cor em um objeto de estilo válido */}
            <Text style={{ color: colors.textSecondary }}>←</Text>
        </TouchableOpacity>
    );
}

export default ButtonReturn;