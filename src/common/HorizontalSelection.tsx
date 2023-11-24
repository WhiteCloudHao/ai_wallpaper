import * as React from 'react';
import {memo} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native'

import { Colors, FontSize } from "../utils/type";
import { TouchableOpacity } from 'react-native';

interface Data {
  dataArr: DataItem[];
  onChange?: (item: DataItem) => void;
  initialIndex: number;
  width?: number;
}

interface DataItem {
  title: string;
  value: any;
}

const HorizontalSelection = ({dataArr, onChange, initialIndex, width}: Data) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialIndex);

  console.log("Render HorizontalSelection");

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.ratioContainer}>
      {dataArr.map((dataItem, index, arr) => {
        return (
          <TouchableOpacity
            key={index}
            style={[styles.buttonRatio, {width : width}]}
            onPress={() => {
              if (index != selectedIndex) {
                setSelectedIndex(index);
                if (onChange) {
                  onChange(dataItem);
                }
              }
            }}
          >
            <Text style={index == selectedIndex ? styles.buttonTitleRatioSelected : styles.buttonTitleRatio}>{dataItem.title}</Text>
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}
function areEqual(prevProps: Data, nextProps: Data) {
    if(prevProps.dataArr.length != nextProps.dataArr.length) {
        console.log('dataarr change')
        return false;
    }
    for(let i =0; i< prevProps.dataArr.length; i++) {
        if((prevProps.dataArr[i].title != nextProps.dataArr[i].title) || (prevProps.dataArr[i].value != nextProps.dataArr[i].value)) {
        console.log('dataarr change')
            return false;
        }
    }
    // if(prevProps.onChange != nextProps.onChange) {
    //     return false;
    // }
    if(prevProps.initialIndex != nextProps.initialIndex) {
        return false;
    }
    if(prevProps.width != nextProps.width) {
        return false;
    }
    return true

}
  

export default memo(HorizontalSelection, areEqual);

const styles = StyleSheet.create({
  ratioContainer: {
    marginTop: 5
  },

  buttonRatio: {
    backgroundColor: 'white',
    borderColor: Colors.BASE,
    borderWidth: 1,
    height: 35,
    borderRadius: 20,
    minWidth: 65,
    marginRight: 10,
    overflow: 'hidden'
  },

  buttonTitleRatio: {
    fontFamily: 'calibrib',
    textAlign: 'center',
    color: '#555',
    fontWeight: '500',
    fontSize: 13,
    flex: 1,
    textAlignVertical: 'center'
  },

  buttonTitleRatioSelected: {
    fontFamily: 'calibrib',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 13,
    backgroundColor: Colors.BASE,
    color: '#fff',
    flex: 1,
    textAlignVertical: 'center'
  }
});
