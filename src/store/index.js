// src/store/index.js
import { createStore } from "vuex";
import stores from "./modules/stores";

export default createStore({
  modules: {
    stores,
  },
  strict: true,
});
