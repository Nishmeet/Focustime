import React from  'react';
import { View,Text,StyleSheet,FlatList} from 'react-native';
import {colors} from '../utils/color.js'
import {fontSize,spacing} from '../utils/sizes.js';



export const FocusHistory = ({history}) =>{
  if (!history || !history.length) return <Text style={styles.title}>We have not focus not anything yet</Text>;

  const renderItem=({item}) => <Text style={styles.item}>- {item}</Text>
  


  
  return(
    <View style={styles.container}>
    <Text style={styles.title} >Focus History Will Be :</Text>
    <FlatList data={history} renderItem ={renderItem} />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    padding:spacing.md,
   flex:1
    

  },
  title:{

    color: colors.white,
    fontSize: fontSize.md,
    fontweight:'bold'
      


 },
 item:{
   color:colors.white,
   fontSize:fontSize.md,
   fontWeight:'bold',
   paddingtop:spacing.md

 }

}

)