import React from 'react'
import {StyleSheet,Button, View ,SafeAreaView} from 'react-native'


const button = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Button
        style={styles.title}
        color="#59B4C3"
        title="Login"
        onPress={() => console.log('Button pressed')}
      />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    width: "30%",
  },
  title:{
    backgroundColor: "#fff",
    borderRadius: 50,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    color: "#74E291",
  }
});

export default button