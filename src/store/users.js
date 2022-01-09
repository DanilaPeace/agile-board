import { flow, types } from "mobx-state-tree";

import apiCall from "../api/index";

const User = types.model("User", {
  id: types.identifier,
  createdAt: types.string,
  name: types.string,
  avatar: types.string,
});

const UsersStore = types.model("UsersStore", {
    // т.к будем грузить пользотелей по api, то нужно указать types.maybe, указывая, что
    // может быть undefined
    users: types.maybe(types.array(User)),
  })
  .actions((self) => {
    return {
      // mst неправильно обрабатывает async/await => нужно использовать flow и генераторы
      load: flow(function* () {
        // console.log('HI');
        self.users = yield apiCall.get("users");
      }),
      // Вызовется после (создания инстанса)обращения к данному стору
      afterCreate() {
        self.load();
      },
    };
  });

export default UsersStore;
