import React, { Component } from 'react'
import { StyleSheet, Image,Text, View, ScrollView } from 'react-native';
// import image_1 from '../../assets/dhdn.png';
import Icon from 'react-native-vector-icons/FontAwesome';


export function News(props){
    // const [News, setNews] = useState([title: ])
    const {item} = props;
        return (
            <ScrollView>
                 <View style = {styles.container}>
                        <View style={styles.bodyMain}>
                            <View style={styles.contentBody}>
                                <Image source={{uri:item.image}} 
                                style = {{ height :80, width:120}}></Image>
                            </View>
                        <View  style={styles.textContentBody}>
                            <Text style={styles.textContentBody1}>
                            {item.title}
                            </Text>
                            <Text>
                                {item.date}
                            </Text>
                            <View style =  {styles.lineStyle} />
                        </View>
                        
                    </View>
            </View>
            </ScrollView>
        )
    
}

export default News

const styles = StyleSheet.create({
    container:{
        // flex : 1,
        // marginTop:10,
        // marginLeft: 20,
        // marginRight: 20,
        // marginBottom: 10,
    }, 
    
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#999999',
        margin:10,
   },
   bodyMain:{
    display:'flex',
    flexDirection: 'row',
   },
   contentBody:{
    flex:2
 },
 textContentBody:{
        flex:4
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'#999999',
        margin:10,
   }

})
