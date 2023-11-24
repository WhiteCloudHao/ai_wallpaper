import {View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import MainLayout from '../../../common/MainLayout';
import { Colors, FontSize } from '../../../utils/type';
import { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalSelection from '../../../common/HorizontalSelection';
import SelectModelWidthImage from '../components/SelectModelWidthImage';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const Home = () => {
    
    const quantities = [
        { title: "Single image", value: 1 },
        { title: "Batch (4 images)", value: 4 }, 
    ];
    let [prompt, setPrompt] = useState('')
    const [selectedQuantity, setSelectedQuantity] = useState(quantities[0]);
    let promptSuggest = [
        'Boy', 'Girl', 'Mom'
    ]
    const listModel = [
        {
            id: 1,
            title: "ok",
            url: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            id: 2,
            title: "ok",
            url: "https://reactnative.dev/img/tiny_logo.png"
        },
        {
            id: 3,
            title: "ok",
            url: "https://reactnative.dev/img/tiny_logo.png"
        },
    ]
    
    const onChangeQuantity = useCallback((quantity: any) => {
        console.log('quantity change') 
        setSelectedQuantity(quantity);}, [quantities]);
    const handleSuggestPrompt = () => {
        let index = promptSuggest.findIndex((ele) => ele == prompt)
        console.log('oho', index)
        if(index < promptSuggest.length) {
            let newPrompt = promptSuggest[++index];
            // console.log('aha', newPrompt)
            setPrompt(newPrompt)
        } else {
            setPrompt(promptSuggest[0])
        }
    }
    const modelChange = (item: any) => {
        console.log('ahihi', item)
    }
    console.log('render home')
    return ( 
        <MainLayout>
            <View>
                <Text style = {styles.title}>Enter Prompt</Text>
            </View>
            <ScrollView keyboardShouldPersistTaps='handled'>
                <View style = {styles.promptInputWrap}>
                    <TextInput
                        style = {styles.promptTextArea}
                        value={prompt}
                        onChangeText={text => { 
                            setPrompt(text) 
                        }}
                        placeholder='What do you want to create?'
                        multiline={true}
                        numberOfLines={5}
                    />
                    <TouchableOpacity onPress={handleSuggestPrompt} style={styles.suggestProptButton}>
                        <Icon name='lightbulb-on-outline' color='#F2E34C' size={17} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.title, { marginTop: 4 }]}>Quantity:</Text>
                <HorizontalSelection dataArr={quantities}
                    initialIndex={0}
                    onChange={onChangeQuantity}
                    width={120}
                />
                <Text style={[styles.title, { marginTop: 4 }]}>Model:</Text>
                <SelectModelWidthImage data = {listModel} onChange = {modelChange} initialIndex = {0} numCol= {2} ratio = "1:1" />
            </ScrollView>
        </MainLayout>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontFamily: 'calibri',
        fontSize: FontSize.SMALL,
        color: Colors.TEXT_BOLD
    },
    promptInputWrap: {
        position: 'relative'
    },
    promptTextArea: {
        marginTop: 6,
        fontSize: 14,
        fontFamily: 'calibri',
        backgroundColor: Colors.INPUT_BACKGROUND,
        borderRadius: 15,
        textAlignVertical: 'top',
        paddingLeft: 14,
        paddingRight: 30,
        color: Colors.LABEL_TEXT
    },
    promptIcon: {
        position: 'absolute',
        right: 8,
        top: 13
    },
    suggestProptButton: {
        position: 'absolute',
        right: 8,
        top: 13
    }
})