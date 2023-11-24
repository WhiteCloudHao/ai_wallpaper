import { StyleSheet, View } from "react-native"
import { StyleProp } from 'react-native';
import { ViewStyle } from 'react-native';
interface Data {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
  }
  
const MainLayout = ({children, style}: Data) => {
    return (
        <View style = {[styles.container, style]}>
            {children}
        </View>
    )
}

export default MainLayout;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 16
    },
})