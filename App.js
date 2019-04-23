import React, { Component } from 'react';
import { 
  Container, Header, Content, Text, Fab, Body, Title, Button, Icon,
  View, Drawer, Item, Input, Picker, Card, CardItem, H3, Left, Right
} from 'native-base';
import { Image, StyleSheet, Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { PieChart } from 'react-native-chart-kit';


import { createStackNavigator, createAppContainer } from 'react-navigation';
import Sidemenu from './src/layouts/Sidemenu';

class FormPage extends React.Component {
  
  static navigationOptions = {
    title: 'Form'
  };

  constructor(props) {
    super(props);
    this.state = {
      selected2: null
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    
    var boxes_vertical = 6;
    var boxes_horizontal = 3;
    var boxes_element = [];

    for (let x = 0; x < boxes_horizontal; x++) {
      boxes_element.push(
        <Col size={33.3} key={x}>
          <Card>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body style={ styles.iconCard }>
                <Icon type="FontAwesome" name="dollar" style={{ marginBottom: 5 }}/>
                <Text> Kategori {x} </Text>
              </Body>
            </CardItem>
          </Card>
        </Col>
      )
    }

    return (
      <Container>
        <Header>
          <Button transparent>
            <Icon name='arrow-back' onPress={ ()=> navigate('Home')} />
          </Button>
          <Body>
            <Title> Catat Pemasukan / Pengeluaran </Title>
          </Body>
        </Header>

        <Content padder>
          <View style={{ flex: 1 }}>
            <Item picker regular style={{ marginBottom: 20 }}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Pilih Jenis Pencatatan" value="null" />
                <Picker.Item label="Pemasukan" value="pemasukan" />
                <Picker.Item label="Pengeluaran" value="pengeluaran" />
              </Picker>
            </Item>
            
            <H3 style={{ marginBottom: 5 }}>Kategori</H3>
            
            <Grid style={{ marginBottom: 20 }}>
              <Row>
                { boxes_element }
              </Row>
              <Row>
                { boxes_element }
              </Row>
              <Row>
                { boxes_element }
              </Row>
              <Row>
                { boxes_element }
              </Row>
            </Grid>
          
          </View> 
        </Content>

      </Container>
    );
  }
};

const styles = StyleSheet.create({
  iconCard:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  }
});

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };

  closeDrawer() {
    this._drawer._root.close();
  }

  openDrawer() {
    this._drawer._root.open();
  }
  
  render() {
    
    const { navigate } = this.props.navigation;
    const data = [
      { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 12 },
      { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 12 },
      { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 12 },
      { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 12 },
      { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 12 }
    ]
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientTo: '#08130D',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    }

    const screenWidth = Dimensions.get('window').width

    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<Sidemenu navigator={this._navigator}/>}
        onClose={()=> this.closeDrawer()}>
      
        <Container>
          <Header>
            <Button transparent>
              <Icon name='menu' onPress={()=> this.openDrawer()}/>
            </Button>
            <Body>
              <Title> Money Noter </Title>
            </Body>
          </Header>

          <Content padder>

            <Card transparent>
              <CardItem>
                <Left>
                  <Body>
                    <Text>Hello, John Doe !</Text>
                    <Text note>Berikut adalah rekapan keuanganmu bulan ini !</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Body>
                <Text> Grafik Keuangan Anda </Text>
                <Left>
                  <PieChart
                    data={data}
                    width={screenWidth}
                    height={150}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                  />
                </Left>
                </Body>
              </CardItem>
            </Card>

            <Card style={{flex: 0}}>
              <CardItem>
                <Left>
                  <Body>
                    <Text> Rp. 100.000.000,- </Text>
                    <Text note>Jumlah Uang Anda Sekarang</Text>
                  </Body>
                </Left>
              </CardItem>
            </Card>
          </Content>

          <View>
            <Fab style={{ backgroundColor: '#5067FF' }} position="bottomRight" onPress = { ()=> navigate('Form')  }>
              <Icon type='AntDesign' name='plus'/>
            </Fab>
          </View> 

        </Container>
      </Drawer>
    );
  }
}

const NavigationApp = createStackNavigator({
  Home : { screen: HomeScreen },
  Form : { screen: FormPage }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

const app = createAppContainer(NavigationApp);

export default app;