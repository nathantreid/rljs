import { IPoint } from '../gameObjects/IPoint';
import Signal from '../gameObjects/Signal';
import PositionComponent from '../components/PositionComponent';
import { entityManager } from '../CurrentGame';

export default class PositionSystem {
  static onPosition = Signal.create(function (entityId: number, newPosition: IPoint) { });
  static onPositioned = Signal.create(function (entityId: number, newPosition: IPoint, oldPosition: IPoint) { });

  constructor() {
    PositionSystem.onPosition.watch(this.onPosition);
  }

  private onPosition(entityId: number, newPosition: IPoint) {
    const entity = entityManager.get(entityId);
    if (!entity) return;

    const positionComponent = entity.getComponent(PositionComponent);
    if (!positionComponent) return;

    const oldPosition = positionComponent.position;
    positionComponent.position = newPosition;

    PositionSystem.onPositioned.dispatch(entityId, newPosition, oldPosition);
  }

}
