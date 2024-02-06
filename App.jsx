import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, useWindowDimensions} from 'react-native';

const App = () => {
  const {height} = useWindowDimensions();

  const imageStyle = {
    width: 250,
    height: 250,
    resizeMode: 'cover',
    position: 'absolute',
    top: 250, 
    left: 55,
    right: 0,
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image
          source={{uri: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2018/2/27/0/iStock-purple-geraniums-542945456.jpg.rend.hgtvcom.616.462.suffix/1519754224444.jpeg'}}
          style={imageStyle}
        />
      </View>
      <Text
        style={styles.textStyle}
        allowFontScaling={false}>
          PURPLE GERANIUM FLOWER
      </Text>
      
      <View style={[styles.textInputContainer, {bottom: 0}]}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Write what you know about this flower!"
          placeholderTextColor="tan"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: 'purple', 
  },
  rowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'pink',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'absolute',
    top: 210, // Add this line to control the position of the text
    left: 0,
    right: 0,

  },
  textInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    borderWidth: 10,
    paddingLeft: 30,
    paddingRight: 10,
    height: 58,
    borderColor: 'pink',
    color: 'white'
  },
});

export default App;