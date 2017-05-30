import React from 'react';
import {Text ,View, Image ,StyleSheet , Linking} from 'react-native';
import {Card,CardSection,Button} from './common';




const RedditDetail = ({reddit}) =>{

    const {Img , HeaderStyle , ImgContainer , CoverImg , TitleStyle } =styles ;

    return(
        <Card>
            <CardSection>
                <View style={ImgContainer}>
                    <Image
                        style={Img}
                        source={{uri : reddit.data.thumbnail}}
                    />
                </View>
                <View style={HeaderStyle}>
                    <Text style={TitleStyle}>{reddit.data.title}</Text>

                </View>

            </CardSection>
            <CardSection>
                <Image style={CoverImg} source={{uri: reddit.data.thumbnail}} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(reddit.data.url)} >
                    Go Now
                </Button>
            </CardSection>
        </Card>
    );
};

var styles = StyleSheet.create({
    HeaderStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    TitleStyle:{
        fontSize: 20,
    },
    Img:{
        height:50,
        width:50,
    },
    ImgContainer:{
        justifyContent:'center',
        alignItems : 'center',
        marginRight :10
    },

    CoverImg:{
        height: 300,
        flex : 1 ,
        width: null
    },

    Card: {
        elevation   : 5,
        borderWidth : 2,
        borderRadius: 1,
        borderColor: '#eee',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
    },
    viewStyle:{
        backgroundColor : '#eee',
        height:60,
        paddingTop:10,
        elevation   : 5,
        borderWidth : 2,
        borderColor : '#eee',
        position:'relative'
    }
});
export default RedditDetail;