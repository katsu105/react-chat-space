import React from 'react'

class SideBar extends React.Component {

  render() {
    return(
      <div>
        <span>{this.props.groupsData.map((data) => {
          return(
            <div>
              {data.name}
            </div>
          )
          })}
        </span>
      </div>
    )
  }
}

export default SideBar