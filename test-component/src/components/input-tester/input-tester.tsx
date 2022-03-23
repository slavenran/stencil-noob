import { Component, State, h } from "@stencil/core";

@Component({
  tag: 'input-tester',
  styleUrl: 'input-tester.scss',
  shadow: true
})
export class InputTester {

  @State() inputValue: string = "Zdrobicu te";

  changeValue(e): void {
    this.inputValue = e.target.value;
  }

  render () {
    return (
      <div>
        <input type="text" value={this.inputValue} onInput={(e) => this.changeValue(e)} />
        <div>{this.inputValue}</div>
      </div>
    )
  }
}