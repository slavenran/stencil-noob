import { h, Component, Listen, Element, Prop, Watch } from '@stencil/core';
import { TabActivateEvent } from '../custom-tab/custom-tab';

@Component({
  tag: 'custom-tabs',
  styleUrl: "custom-tabs.scss",
  scoped: true
})
export class CustomTabs {

  @Prop({mutable: true}) activeTab: string;

  @Watch("activeTab")
  handleActiveTabChange(newValue: string) {
    const headings = this.getHeadings();

    headings.forEach(heading => {
      if (heading.name === newValue) {
        heading.active = true;
      } else {
        heading.active = false;
      }
    });
  }

  @Element() element;

  @Listen("tabActivate")
  handleTabActivate(e: CustomEvent<TabActivateEvent>) {
    this.activeTab = e.detail.name;
  };

  getHeadings = () => [...this.element.querySelector(".tabs-container").children]
                        .filter(child => child.tagName.toLowerCase() === "custom-tab");

  componentDidLoad() {
    if (this.activeTab === undefined) {
      const headings = this.getHeadings();
      const haveActiveTab = headings.filter(heading => heading.active).length > 0;
      if (!haveActiveTab && headings.length > 1) {
        this.activeTab = headings[0].name;
      }
    } else {
      this.handleActiveTabChange(this.activeTab);
    }
  }

  render() {
    return (
      <div class="tabs-container">
        <slot />
      </div>
    );
  };
}
