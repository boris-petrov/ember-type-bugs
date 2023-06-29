import Route from '@ember/routing/route';

class Model {}

class Child extends Model {}

export default abstract class FooRoute<T extends Model = Model> extends Route<T> {
  public override serialize(object: Child): any {
    return null;
  }
}
