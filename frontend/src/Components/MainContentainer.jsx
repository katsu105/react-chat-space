import React from 'react'
import SideBar from './SideBar'
import axios from 'axios'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/groups')
      .then((results) => {
        console.log(results)
        this.setState({groups: results.data})
      })
      .catch((data) =>{
        console.log(data)
      })
    }
    render() {
      return (
        <div className='app-main'>
          <SideBar groupsData={this.state.groups} />
        </div>
      );
    }
}

export default MainContainer