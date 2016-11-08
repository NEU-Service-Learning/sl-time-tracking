import React, { Component, PropTypes } from 'react'

class Timeline extends Component {
  render () {
    return (
      <div>
        <div className="home-timeline-row">
          <div className="home-timeline-date">
            Today
            <div>Dec 2, 2016</div>
          </div>
          <div className="home-timeline-col">
            <div style={{ flex: 1 }} />
            <div className="home-timeline-dot" />
            <div className="home-timeline-line">
              <div />
              <div />
            </div>
          </div>
          <div className="home-timeline">
            <div className="home-timeline-block">
              <div className="home-timeline-time">
                2:33 - 3:44
                <div>1:00:00</div>
              </div>
              <div className="home-timeline-className">
                Class A
              </div>
            </div>
          </div>
        </div>
        <div className="home-timeline-row">
          <div className="home-timeline-date">
          </div>
          <div className="home-timeline-col">
            <div className="home-timeline-line">
              <div />
              <div />
            </div>
            <div className="home-timeline-dot old" />
            <div className="home-timeline-line">
              <div />
              <div />
            </div>
          </div>
          <div className="home-timeline">
            <div className="home-timeline-block">
              <div className="home-timeline-time">
                2:33 - 3:44
                <div>1:00:00</div>
              </div>
              <div className="home-timeline-className">
                Class A
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Timeline
