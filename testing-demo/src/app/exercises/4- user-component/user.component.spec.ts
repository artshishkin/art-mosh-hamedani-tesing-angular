import {UsersComponent} from "./users.component";
import {UserService} from "./user.service";
import {from, throwError} from "rxjs";

describe("UsersComponent", () => {

  let usersComponent: UsersComponent;
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService(null as any);
    usersComponent = new UsersComponent(userService);
  });

  it("should load users from the server on component initialization", () => {

    let users: any[] = [{id: 1}, {id: 2}];
    spyOn(userService, "getUsers").and.returnValue(from([users]));

    usersComponent.ngOnInit();

    expect(usersComponent.users).toEqual(users);

  });

  describe("When deleting a user, ", () => {

    it("should ask customer for deletion", () => {

      let spy = spyOn(window, "confirm");

      usersComponent.deleteUser({id: 123, name: 'Art'});

      expect(spy).toHaveBeenCalledWith("Are you sure you want to delete Art?");

    });

    it("should NOT delete user on reject", () => {

      spyOn(window, "confirm").and.returnValue(false);
      let spy = spyOn(userService, "deleteUser");

      usersComponent.deleteUser({id: 123});

      expect(spy).not.toHaveBeenCalled();

    });

    describe("and confirming deletion", () => {

      let users: any[];

      beforeEach(() => {
        spyOn(window, "confirm").and.returnValue(true);
        users = [{id: 1}, {id: 2}, {id: 3}];
      });

      it("should delete user from users field", () => {

        usersComponent.users = users;
        let userToDelete: any = users[1];
        spyOn(userService, "deleteUser").and.returnValue(from([true]));

        usersComponent.deleteUser(userToDelete);

        expect(usersComponent.users.length).toBe(2);
        expect(usersComponent.users).not.toContain(userToDelete);
      });

      it("should call service delete method", () => {

        usersComponent.users = users;
        let userToDelete: any = {id: 2};
        let spy = spyOn(userService, "deleteUser").and.returnValue(from([true]));

        usersComponent.deleteUser(userToDelete);

        expect(spy).toHaveBeenCalledWith(userToDelete.id);
      });

      it("should show alert if service throws an error", () => {

        usersComponent.users = users;
        let userToDelete: any = users[1];
        spyOn(userService, "deleteUser").and.returnValue(throwError("Server throws an error"));
        let alertSpy = spyOn(window,"alert");

        usersComponent.deleteUser(userToDelete);

        expect(alertSpy).toHaveBeenCalledOnceWith("Could not delete the user.");
      });

      it("should NOT delete user from users field if service throws an error", () => {

        usersComponent.users = users;
        let userToDelete: any = users[1];
        spyOn(userService, "deleteUser").and.returnValue(throwError("Server throws an error"));

        usersComponent.deleteUser(userToDelete);

        expect(usersComponent.users.length).toBe(3);
        expect(usersComponent.users).toContain(userToDelete);
      });

    });

  });

});
