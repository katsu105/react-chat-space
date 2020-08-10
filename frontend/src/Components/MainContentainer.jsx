import React from 'react'
import axios from 'axios'
import SideBar from './SideBar'
import ChatContainer from './ChatContainer'

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
        // console.log(results)
        this.setState({groups: results.data})
      })
      .catch((data) =>{
        // console.log(data)
      })
    }
    render() {
      return (
        <div className='app-main'>
          <SideBar groupsData={this.state.groups} />
          <ChatContainer />
        </div>
      );
    }
}

export default MainContainer