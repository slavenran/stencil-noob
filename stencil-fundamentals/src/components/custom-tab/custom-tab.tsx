import { h, Component, Prop, Event, EventEmitter, Listen } from '@stencil/core';

export interface TabActivateEvent {
  name: string;
}

@Component({
  tag: 'custom-tab',
  styleUrl: "custom-tab.scss",
  scoped: true
})
export class CustomTab {
  @Prop() name: string;
  @Prop({mutable: true}) active: boolean;

  @Event() tabActivate: EventEmitter<TabActivateEvent>;

  @Listen("click")
  handleClick() {
    this.active = true;
    this.tabActivate.emit({
      name: this.name
    });
  };
  
  getCSSClass = () => this.active ? "custom-tab active" : "custom-tab";

  render() {
    return (
      <div class={this.getCSSClass()}>
        <slot />
      </div>
    );
  };
}
