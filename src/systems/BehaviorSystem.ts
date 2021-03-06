import Signal from "gameObjects/Signal";
import TimeScheduler from "systems/TimeScheduler";

export interface IBehavior {

}

export default class BehaviorSystem {
  static behaviors: Map<String, IBehavior> = new Map;
  static onAct = Signal.create(function (entityId: number) { });


  constructor() {
    TimeScheduler.onAct.watch((entityId) => {

      return 0;
    })
  }
}
