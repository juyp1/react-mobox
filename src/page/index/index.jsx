import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import Button from '@material-ui/core/Button'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
import './index.css'
@inject('userstore')
@observer
class Index extends Component {
  state = {
    params: {
      pageSize: 10,
      pageNum: 1
    }
  }
  componentDidMount() {
    const { userstore } = this.props
    // userstore.list(this.state.params).then(res => {
    //   console.log(res)
    // })
  }
  render() {
    return (
      <div className="yqd-containers">
        <div className="yqd-wrapper">
          <ul className="nav nav-pills">
            <li >
              <a href="#">首页</a>
            </li>
            <li  >
              <a href="#">品牌介绍</a>
            </li>
            <li >
              <a href="#">产品展示</a>
            </li>
            <li >
               
                <img src="https://s1.ax1x.com/2020/03/19/8yFOIO.png" className="yqd-logo"/>
               
            </li>
            <li >
              <a href="#">新闻资讯</a>
            </li>
            <li >
              <a href="#">美颜课堂</a>
            </li>
            <li >
              <a href="#">联系我们</a>
            </li>
          </ul>
          
        </div>
         <div className="container">
          <div className="yqd-context">
          <div className="col-md-4 text-center">
             <p><img src="" alt="" srcset=""/></p>
             <p>小分子补水</p>
             <p>small molecule hydration</p>
          </div>
          <div className="col-md-4 text-center">
          <p><img src="" alt="" srcset=""/></p>
             <p>嫩滑亮白</p>
             <p>tender and bright white</p>
          </div>
          <div className="col-md-4 text-center">
          <p><img src="" alt="" srcset=""/></p>
             <p>滋润紧实</p>
             <p>moisturizing and firming</p>
          </div>
          </div>
          <div className=''> </div>
         </div>
      </div>
    )
  }
}
export default Index
