import { types } from "mobx-state-tree";

import UsersStore from "./users";
import BoardStore from "./boardStore";

const RootStore = types.model("RootStore", {
  // types.optional - нужно потому что, изначально в нашем сторе ничего нет
  users: types.optional(UsersStore, {}),
  boards: types.optional(BoardStore, {}),
});

export default RootStore;
