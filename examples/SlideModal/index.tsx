import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native'

import { Button, SlideModal, BottomModal } from '../../src/'
import styles from '../common/styles'

const screen = Dimensions.get('window')

export default class SlideModalScreen extends Component<{}, any> {
  [propName: string]: any

  constructor (p) {
    super(p)
    this.state = {
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.body}
        contentContainerStyle={styles.container}>

        <Button
          onPress={() => {
            this.slideModal.open()
          }}>
          SlideModal 基础
        </Button>

        <SlideModal
          ref={c => {
            this.slideModal = c
          }}
          cancelable={true}
        >
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 4 }}>
            <View>
              <Text style={{ backgroundColor: '#fff' }}>自定义内容</Text>
              <Text>内容比较简单，完全由用户自定义</Text>
            </View>
          </View>
        </SlideModal>

        <Button
          style={styles.cell}
          ref={element => {
            this.btnEl2 = element
          }}
          onPress={() => {
            this.btnEl2.measure((fx, fy, width, height, px, py) => {
              this.setState({
                offsetX2: px,
                offsetY2: py
              })
              this.slideModal2.open().catch((e) => {
                console.log(e)
              })
            })
          }}
        >
          指定位置、上拉
        </Button>

        <SlideModal
          ref={c => {
            this.slideModal2 = c
          }}
          offsetX={this.state.offsetX2}
          offsetY={this.state.offsetY2}
          cancelable={true}
          forceFullScreen={false}
        >
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <View>
              <Text>自定义内容</Text>
              <Text>内容比较简单，完全由用户自定义</Text>
            </View>
          </View>
        </SlideModal>

        <Button
          style={styles.cell}
          ref={element => {
            this.btnEl3 = element
          }}
          onPress={() => {
            this.btnEl3.measure((fx, fy, width, height, px, py) => {
              this.setState({
                offsetX3: px,
                offsetY3: py + height
              })
              this.slideModal3.open()
            })
          }}
        >
          指定位置、下拉、强制全屏
        </Button>

        <SlideModal
          ref={c => {
            this.slideModal3 = c
          }}
          forceFullScreen={true}
          offsetX={0}
          offsetY={this.state.offsetY3}
          direction='down'
          cancelable={true}
        >
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              width: screen.width
            }}>
            <View>
              <Text>自定义内容</Text>
              <Text>内容比较简单，完全由用户自定义</Text>
            </View>
          </View>
        </SlideModal>

        <Button
          style={styles.cell}
          ref={element => {
            this.btnEl4 = element
          }}
          onPress={() => {
            this.btnEl4.measure((fx, fy, width, height, px, py) => {
              this.setState({
                offsetX4: px + width,
                offsetY4: py + height
              })
              this.slideModal4.open()
            })
          }}
        >
          SlideModal 指定位置、左拉
        </Button>

        <SlideModal
          ref={c => {
            this.slideModal4 = c
          }}
          offsetX={this.state.offsetX4}
          offsetY={this.state.offsetY4}
          direction='left'
          cancelable={true}
        >
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            <View>
              <Text>自定义内容</Text>
              <Text>内容比较简单，完全由用户自定义</Text>
            </View>
          </View>
        </SlideModal>

        <Button
          style={styles.cell}
          ref={element => {
            this.btnEl5 = element
          }}
          onPress={() => {
            this.btnEl5.measure((fx, fy, width, height, px, py) => {
              this.setState({
                offsetX5: px,
                offsetY5: py + height
              })
              this.slideModal5.open()
            })
          }}
        >
          SlideModal 指定位置、右拉
        </Button>

        <SlideModal
          ref={c => {
            this.slideModal5 = c
          }}
          offsetX={this.state.offsetX5}
          offsetY={0}
          direction='right'
          cancelable={true}
        >
          <View
            style={{
              height: screen.height,
              backgroundColor: '#fff',
              padding: 20
            }}
          >
            <View>
              <Text>自定义内容</Text>
              <Text>内容比较简单，完全由用户自定义</Text>
            </View>
          </View>
        </SlideModal>

        <Text style={styles.title}>BottomModal 继承 SlideModal</Text>
        <Button
          onPress={() => {
            this.bottomModal1.open()
          }}
        >
          BottomModal 基础
        </Button>

        <BottomModal
          ref={(c) => { this.bottomModal1 = c }}
          title='选择品类'
          cancelable={true}
          cancelCallback={() => {
            console.log('cancel')
          }}
          confirmCallback={() => {
            console.log('confirm')
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>自定义内容</Text>
          </View>
        </BottomModal>

        <Button
          style={styles.cell}
          onPress={() => {
            this.bottomModal2.open()
          }}
        >
          BottomModal 自定义按钮
        </Button>

        <BottomModal
          ref={(c) => { this.bottomModal2 = c }}
          title='选择品类'
          cancelable={true}
          cancelLabel={null}
          confirmLabel={
            <Text style={{ textAlign: 'right', fontSize: 30, color: '#aaa', marginRight: 15 }}>&times;</Text>
          }
          confirmCallback={() => {
            console.log('confirm')
          }}
        >
          <View
            style={{
              backgroundColor: '#fff',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text>自定义内容</Text>
          </View>
        </BottomModal>
      </ScrollView>
    )
  }
}