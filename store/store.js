import { configureStore } from "@reduxjs/toolkit";
import savedChatReducer from "./saved";

export const store = configureStore({
  reducer: {
    savedChats: savedChatReducer,
  },
});
