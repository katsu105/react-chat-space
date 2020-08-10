import React from 'react'
import { Link } from 'react-router-dom'

class SideBar extends React.Component {

  render() {

    return(
      <div className="sidebar">
        <a href="/groups/new" className="group-new">+
        </a>
        <span>{this.props.groupsData.map((data) => {
          return(
            <div className="group">
              <a href={'/groups/' + data.id }>{data.name}</a>
            </div>
          )
          })}
        </span>
      </div>
    )
  }
}

export default SideBar