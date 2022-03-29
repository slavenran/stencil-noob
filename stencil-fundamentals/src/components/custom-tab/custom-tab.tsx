import { h, Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'custom-tab',
  styleUrl: "custom-tab.scss",
  scoped: true
})
export class CustomTab {
  @Prop() name: string;
  @Prop() active: boolean;
  
  getCSSClass = () => this.active ? "custom-tab active" : "custom-tab";

  render() {
    return (
      <div class={this.getCSSClass()}>
        <slot />
      </div>
    )
  }
}
