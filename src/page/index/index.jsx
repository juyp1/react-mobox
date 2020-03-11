import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
    userstore.list(this.state.params).then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            1
          </Grid>
          <Grid item xs={6}>
           2
          </Grid>
          <Grid item xs={6}>
           3
          </Grid>
        </Grid>
      </div>
    )
  }
}
export default Index
