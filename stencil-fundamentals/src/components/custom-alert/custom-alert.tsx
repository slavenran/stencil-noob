import { h, Component, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';

export interface AcknowledgeEvent {
  when: Date;
}

@Component({
  tag: 'custom-alert',
  styleUrl: "custom-alert.scss",
  scoped: true
})
export class CustomAlert {
  @Prop() text: string = "This is an important alert!"
  @Prop() kind: "info" | "success" | "error" = "info"
  @State() acknowledged: boolean = false;
  @Event() acknowledge: EventEmitter<AcknowledgeEvent>;

  @Listen("click")
  handleClick() {
    this.acknowledged = true;
    this.acknowledge.emit({
      when: new Date()
    });
  }

  getCSSClass = () => this.kind + (this.acknowledged ? " acknowledged" : "");

  render() {
    return <div class={this.getCSSClass()}>
      {this.text}
    </div>;
  }
}
