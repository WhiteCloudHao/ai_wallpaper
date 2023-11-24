import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native"

interface Data {
    data: DataItem[];
    onChange?: (item: DataItem) => void;
    initialIndex: number;
    numCol: number;
    ratio: string;
}
interface DataItem {
    id: number,
    title: string;
    url: string;
}

const screenWidth = Dimensions.get('window').width;
const SelectModelWidthImage = ({data, onChange, initialIndex, numCol = 2, ratio = "1:1"}: Data) => {
    const ratioNumerator = Number(ratio.split(":")[0])
    const ratioDenominator = Number(ratio.split(":")[1])
    const imageItemWidth = (screenWidth -15*2)/numCol
    const imageItemHeight = imageItemWidth*ratioDenominator/ratioNumerator
    console.log('ratio', ratioNumerator, ratioDenominator, screenWidth, imageItemHeight)
    return (
        <ScrollView style = {{}} showsHorizontalScrollIndicator={false} horizontal={true}>
            {data.map(ele => {
                return (
                    <TouchableHighlight key={ele.id}>
                        <View style={{ position: 'relative', marginRight: 8 }}>
                            <Image
                                style={[styles.image]}
                                source={{
                                    uri: ele.url
                                }}
                            />
                            <View style={styles.titleBackground}></View>
                        </View>
                    </TouchableHighlight>
                )
            })}
        </ScrollView>
    )
}

export default SelectModelWidthImage;

const styles = StyleSheet.create({
    image: {},
    titleBackground: {

    }
})