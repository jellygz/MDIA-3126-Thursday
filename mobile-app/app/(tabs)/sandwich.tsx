import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Sandwich() {
    return (
        <View>
            <Text>This is the sandwich page 🍞</Text>
            <Link href="/injeolmi">Take me to the injeolmi page, please!</Link>
        </View>
    )
}
