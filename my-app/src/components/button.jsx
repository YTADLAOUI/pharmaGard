import React from 'react'
import {StyleSheet,Button, View ,SafeAreaView} from 'react-native'


const button = ({title,onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Button
        style={styles.title}
        color="#59B4C3"
        title={title || "Button"}
        onPress={onPress}
      />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "30%",
  },
});

export default button