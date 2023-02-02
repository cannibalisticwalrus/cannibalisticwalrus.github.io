import React from 'react';


class NavTabs extends React.Component{

  render() {
          return(
        <div className="tabs-container">
        <div className="tab">Cybersecurity</div>
        <div className="tab">Software Development</div>
        <div className="tab">Art Portfolio</div>
        <div className="tab">About</div>
        <div className="tab">Blog</div>
      </div>
    );
  }

}
export default NavTabs;