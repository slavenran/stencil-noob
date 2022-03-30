import { h, Component } from "@stencil/core";

@Component({
  tag: "custom-modal",
  styleUrl: "custom-modal.scss",
  scoped: true
})
export class CustomModal {
  render() {
    return <h1>Brrrr</h1>;
  }
}