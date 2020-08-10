import React from 'react'
import axios from 'axios'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.group_name = {
      group_name: ""
    }
  }

  componentDidMount() {
    var group_id = 1
    axios.get(`http://localhost:3001/api/groups/${group_id}/fetch_group_name`)
      .then((results) => {
        console.log(results)
        this.setState({group_name: results.data})
      })
      .catch((data) =>{
        console.log(data)
      })
    }

    render() {

      return(
        <div>
          {/* {this.state.group_name} */}
        </div>
      )
    }
}

export default Header