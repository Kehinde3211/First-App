import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.box}>
      <View style={styles.box1}>
        <View style={styles.box2}>
          <View style={styles.box3}></View>
            <View style={styles.box3}></View>
              <View style={styles.box3}></View>
            </View>
          </View>
          </View>

  )
}

export default _layout

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "center",
  },
  box1: {
    backgroundColor: 'yellow',
    height: 300,
    width: 300,
    borderRadius: 150,
    padding: 50,
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    justifyContent: "center",

  },
  box2: {
backgroundColor: 'green',
height: 205,
width: 205,
alignItems: 'flex-start',
justifyContent: 'flex-start',
flexDirection: 'row',
borderColor: 'black',
 borderWidth: 3,
},
box3: {
  backgroundColor: 'white',
  height: 50,
  width: 50,
  borderRadius: 25,
  //padding: 20,
  marginRight: 25,
  borderColor: 'black',
    borderWidth: 5,
},
})