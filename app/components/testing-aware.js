import Component from '@glimmer/component';
import { isTesting, macroCondition } from '@embroider/macros';

export default class TestingAwareComponent extends Component {
  get amIBeingTested() {
    return isTesting() ? 'Yes, I am' : "No, I'm not";
  }
}
