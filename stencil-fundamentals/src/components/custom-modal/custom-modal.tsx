import { h, Component, Method, Element, Prop, State } from "@stencil/core";
@Component({
  tag: "custom-modal",
  styleUrl: "custom-modal.scss",
  scoped: true
})
export class CustomModal {
  @Prop() title: string;
  @Prop() content: string;

  @Element() modalEl: HTMLElement;

  @Method()
  open() {
    this.modalEl.style.display = "block";
  }

  @State() showOptions: boolean = false;

  buttons = ["Okay", "Cancel"];

  closeModalHandler() {
    this.modalEl.style.display = "none";
    this.showOptions = false;
  }

  showOptionsHandler() {
    this.showOptions = !this.showOptions;
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.content}</p>
        <hr />
        <button onClick={this.showOptionsHandler.bind(this)}>Show options</button>
        <hr />
        {this.showOptions && this.buttons.map((btn) => <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>)}
      </div>
    );
  }
}