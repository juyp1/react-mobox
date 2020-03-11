import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject('userstore')
@observer
class Index extends Component {
  state = {
    params: {
      pageSize: 10,
      pageNum: 1
    }
  }
  componentDidMount(){
    const { userstore } = this.props
    userstore.list(this.state.params).then(res=>{
      console.log(res)
    })
  }
  render() {
    return <div>这是首页</div>
  }
}
export default Index
