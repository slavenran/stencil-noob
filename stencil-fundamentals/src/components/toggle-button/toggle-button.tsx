import { Component, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'toggle-button'
})
export class ToggleButton {
    // `isOpen` is decorated with `@State()`,
    // changes to it will trigger a rerender
    @State() isOpen: boolean = true;

    @Listen('hover', { capture: true })
    handleClick() {
        // whenever a click event occurs on
        // the component, update `isOpen`,
        // triggering the rerender
        this.isOpen = !this.isOpen;
    }

    render() {
        return <button>
          {this.isOpen ? "Open" : "Closed"}
        </button>;
    }
}