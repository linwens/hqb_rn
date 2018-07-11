//这里是loading组件
import React, {Component} from 'react'
import {
    Modal,//引入modal组件，用于遮罩
    ActivityIndicator,//rn自带环形loading样式
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Loading extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:this.props.isVisible,//初始值来自跟组件isVisible
            loadingIcon:true,//是否显示loading的圈圈
        }
    }

    close(){//隐藏loading
        this.setState({modalVisible:false})
    }

    show(){//显示loading
        this.setState({modalVisible:true})
    }

    render(){
        return(
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={()=>{console.log('modal已关闭')}}
            >{/*onRequestClose在安卓是必须的*/}
                <TouchableOpacity style={styles.loadingBox} onPress={()=>{this.close()}}>
                    <View style={styles.IndicatorBox}>
                        <ActivityIndicator
                            animating={this.state.loadingIcon}
                            color='white'
                            size="large"
                            style={{
                                marginTop: 20,
                                width: 60,
                                height: 60,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    loadingBox:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.2)',
    },
    IndicatorBox:{
        width:100,
        height:120,
        borderRadius:10,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    }
})