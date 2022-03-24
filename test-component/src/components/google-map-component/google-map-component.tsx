import { h, Component } from "@stencil/core";

@Component({
  tag: 'google-map-component',
  styleUrl: '',
  shadow: true
})
export class GoogleMapComponent {
  render() {
    return (
      <div id='map'>
      </div>
    )
  }
}