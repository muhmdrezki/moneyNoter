import React, { Component } from 'react';
import { 
    Content, Text, Icon, View, List, ListItem, Thumbnail,
    Left, Body, Footer
} from 'native-base';
import { Image, StyleSheet } from 'react-native';

export default class Sidemenu extends Component {
  render() {
      return (
        <Content style={{ backgroundColor: '#FFFFFF' }}>
            <View padder>
                <View style={ styles.MainView }>
                    <Image 
                        source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                        style={{width: 100, height: 100, borderRadius: 100/2, 
                                alignItems: 'center', justifyContent: 'center',
                                marginBottom: 10
                            }} 
                    />
                    <Body>
                        <Text> John Doe </Text>
                        <Text note> Someone Awesome </Text>    
                    </Body>  
                </View>
                <List>
                    <ListItem last style={{ marginTop: 10 }}>
                        <Icon type="MaterialCommunityIcons" name="face-profile" style={{ marginRight: 10 }}/><Text> Profile </Text>
                    </ListItem>
                    <ListItem last>
                        <Icon type="MaterialCommunityIcons" name="settings" style={{ marginRight: 10}} /><Text> Settings </Text>
                    </ListItem>
                    <ListItem last>
                        <Icon type="Entypo" name="help" style={{ marginRight: 10}} /><Text> About App </Text>
                    </ListItem>
                    <ListItem last>
                        <Icon type="AntDesign" name="logout" style={{ marginRight: 10, color: '#CC0101'}} /><Text style={{ color: '#CC0101'}}> Log Out </Text>
                    </ListItem>
                </List>
            </View>
        </Content>
      );
  }
}

const styles = StyleSheet.create({
      MainView:
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      }
});