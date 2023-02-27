import { createSlice } from "@reduxjs/toolkit";

const savedChatsSlice = createSlice({
  name: "savedChats",
  initialState: {
    ids: [],
  },
  reducers: {
    saveChat: (state, action) => {
      state.ids.push(action.payload.id);
      // need to provide this id later
    },
    deleteChat: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const saveChat = savedChatsSlice.actions.saveChat;
export const deleteChat = savedChatsSlice.actions.deleteChat;
export default savedChatsSlice.reducer;
