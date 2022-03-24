import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  private mapComponent;

  componentDidLoad(){
    this.mapComponent = document.querySelector('my-google-maps');
  }

  testMarker(){
    let center = this.mapComponent.getCenter();
    this.mapComponent.addMarker(center.lat(), center.lng());
  }

  render() {
    return (
      <div class='app-home'>
        <div class='map-container'>
          <my-google-maps apiKey="AIzaSyCWpaDDvVOu5MYHlARxvyJP88JdQLa200c"></my-google-maps>
        </div>
        <button onClick={() => this.testMarker()}>
          Add Marker
        </button>
      </div>
    );
  }
}
