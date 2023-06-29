import Component from '@ember/component';

export default class FooComponent extends Component {
  public init() {
    super.init();
  }

  public append() {
    this.element.dispatchEvent(new Event('mousedown'));
  }
}
