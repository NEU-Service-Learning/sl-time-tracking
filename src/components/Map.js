import React, { Component, PropTypes } from 'react'
import { GoogleMap, GoogleMapLoader } from 'react-google-maps'

import appleMapsStyle from '../utils/appleMapsStyle.json'

class Map extends Component {
  static propTypes = {
    defaultCenter: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    defaultZoom: PropTypes.number,
    style: PropTypes.object,
  }
  static defaultProps = {
    defaultZoom: 12,
  }
  render() {
    console.log(appleMapsStyle);
    const { defaultCenter, defaultZoom, style } = this.props
    return (
      <GoogleMapLoader
        containerElement={<div style={style} />}
        googleMapElement={
          <GoogleMap
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
            defaultOptions={{
              styles: appleMapsStyle,
            }}
          />
        }
      />
    )
  }
}

export default Map
