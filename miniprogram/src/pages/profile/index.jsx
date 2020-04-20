import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'
import  backgroundJpg from '../../assets/images/background.jpg'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  

  config = {
    navigationBarTitleText: '完善资料',
    navigationBarBackgroundColor: '#f4ea2a',
    navigationBarTextStyle: 'white'
  }

  render () {
    return (
      <View className='index'>
          <Image className='topBack'
            src={backgroundJpg}
          />
          <View className='start'>
            <AtButton type='secondary' onClick={Taro.navigateTo({url: '/pages/profile/index'})}>开启之旅吧</AtButton>
            <View className='guang'><Text>先逛逛吧</Text></View>
          </View>
      </View>
    )
  }
}
