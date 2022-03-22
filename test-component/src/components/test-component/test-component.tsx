import { Component, Event, EventEmitter, State, h } from "@stencil/core";

@Component({
  tag: 'test-component',
  styleUrl: 'test-component.scss'
})

export class TestComponent {
  public list: Array<any> = [
    {
      name: 'Gorostas',
      description: 'Strasni jurisni bik',
      url: "",
      imageUrl: ""
    },
    {
      name: 'Bembara',
      description: 'Snijeg je opet SNEZANA',
      url: "",
      imageUrl: ""
    },
    {
      name: 'Mrzim',
      description: 'Mrzim izmisljati opise',
      url: "",
      imageUrl: ""
    },
    {
      name: 'Lorem ipsum',
      description: 'Trebao sam samo lorem ipsum uzeti',
      url: "",
      imageUrl: ""
    },
    {
      name: 'Sunce',
      description: 'Ubija me sunce u oci ne vidim sta radim nerviram se',
      url: "",
      imageUrl: ""
    }
  ];

  @State() toggle: boolean = false;

  @Event() onToggle: EventEmitter;

  toggleComponent(): void {
    this.toggle = !this.toggle;
    this.onToggle.emit({visible: this.toggle});
  }

  render () {
    return (
      <div>
        <div class="jumbotron">
          <center>
            <h1 class="display-3">Welcome!</h1>
            <p class="lead">This is a Stencil sample application - Demonstrating the power of pure web components!</p>
            <button class="btn btn-primary" onClick={() => this.toggleComponent()}>Learning resource for web developers</button>
          </center>
        </div>
        <div class={this.toggle ? 'active' : 'inactive'}>
          <div class="row">
            {
              this.list.map((entry) =>
                <div class="col-lg-3 col-md-6 col-sd-12">
                  <div class="card">
                    <a href={entry.url} target="_blank"><img class="card-img-top" src={entry.imageUrl} /></a>
                    <div class="card-body">
                      <h4 class="card-title">{entry.name}</h4>
                      <p class="card-text">{entry.description}</p>
                      <a href={entry.url} class="btn btn-success" target="_blank">Go to {entry.name}</a>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}