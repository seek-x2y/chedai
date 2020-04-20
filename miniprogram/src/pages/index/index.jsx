import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Picker } from '@tarojs/components'
import { AtInputNumber, AtButton }  from 'taro-ui'
import './index.scss'
import backImag from '../../assets/images/back.jpg'


export default class Index extends Component {
  state ={
    brands: ['奔驰', '宝马', '法拉利', '马自达', '丰田'],
    carType: [],
    carSetting: [],
    times: [],
    price: 0.00,
    loan: 0.00,
    checkedValue: '请选择',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange = e => {
    this.setState({
      checkedValue: this.state.brands[e.detail.value]
    })
  }
  handlePriceChange (value) {
    this.setState({
      price:value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  handleLoanChange (value) {
    this.setState({
      loan:value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  config = {
    navigationBarTitleText: '首页',
    // navigationBarBackgroundColor: '#f4ea2a',
    // navigationBarTextStyle: 'white'
  }


  render () {
    return (
      <View className='index'>
        <Image
          className='background'
          src={backImag}
        ></Image>
        <View className='container'>
          <View className='page-body'>
            <View className='page-section'>
              {/* <Text className='label'>品牌</Text> */}
              <View className='field'>
                <Picker mode='selector' range={this.state.brands} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.checkedValue}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              {/* <Text className='label'>车型：</Text> */}
              <View  className='field'>
                <Picker mode='selector' range={this.state.carType} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.checkedValue}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              {/* <Text className='label'>配置：</Text> */}
              <View  className='field'>
                <Picker mode='selector' range={this.state.carSetting} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.checkedValue}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text className='label'>成交价格：</Text>
              <View  className='digit-field'>
                <AtInputNumber
                  min={0}
                  max={9999999}
                  step={1}
                  type='digit'
                  width={300}
                  value={this.state.price}
                  onChange={this.handlePriceChange.bind(this)}
                />（元）
              </View>
            </View>
            <View className='page-section'>
              <Text className='label'>贷款金额：</Text>
              <View  className='digit-field'>
                <AtInputNumber
                  min={0}
                  max={999999}
                  type='digit'
                  step={1}
                  width={300}
                  value={this.state.loan}
                  onChange={this.handleLoanChange.bind(this)}
                />（元）
              </View>
            </View>
            <View className='page-section'>
              <Text className='label'>首付比例：</Text>
              <View  className='digit-field'>
                <AtInputNumber
                  min={0}
                  max={999999}
                  type='digit'
                  step={1}
                  width={300}
                  value={this.state.loan}
                  onChange={this.handleLoanChange.bind(this)}
                />（%）
              </View>
            </View>
            <View className='page-section'>
              {/* <Text className='label'>期数：</Text> */}
              <View  className='field'>
                <Picker mode='selector' range={this.state.times} onChange={this.onChange}>
                  <View className='picker'>
                    {this.state.checkedValue}
                  </View>
                </Picker>
              </View>
            </View>
            <View className='page-section'>
              <Text className='label'>补贴上限：</Text>
              <View  className='number-field'>{}</View>
            </View>
            <View className='page-section'>
              <Text className='label'>贴息金额：</Text>
              <View  className='number-field'>{}</View>
            </View>
            <View className='page-section'>
              <Text className='label'>总利率为：</Text>
              <View  className='number-field'>{}</View>
            </View>
            <View className='page-section'>
              <Text className='label'>总利息为：</Text>
              <View  className='number-field'>{}</View>
            </View>
            <View className='page-section'>
              <Text className='label'>每月应还：</Text>
              <View  className='number-field'>{}</View>
            </View>
            <View className='page-section'>
              <Text className='label'>提车前应付利息：</Text>
              <View  className='number-field'>{}</View>
            </View>
          </View>
          <AtButton type='primary' size='normal'>提交</AtButton>
        </View>
      </View>
    )
  }
}
