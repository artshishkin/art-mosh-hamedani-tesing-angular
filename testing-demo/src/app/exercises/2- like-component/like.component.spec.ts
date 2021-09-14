import {LikeComponent} from "./like.component";

describe('LikeComponent', () => {

  let likeComponent: LikeComponent;

  beforeEach(() => {
    likeComponent = new LikeComponent();
  });

  it('should increase totalLikes if I like the object and click the icon to tick it', () => {
    likeComponent.iLike = false;

    likeComponent.click();

    expect(likeComponent.totalLikes).toBe(1);
    expect(likeComponent.iLike).toBeTruthy();
  });

  it('should decrease totalLikes if I do not like an object and click the icon to untick it', () => {
    likeComponent.iLike = true;
    likeComponent.totalLikes = 100;

    likeComponent.click();

    expect(likeComponent.totalLikes).toBe(99);
    expect(likeComponent.iLike).toBeFalsy();
  });

});
