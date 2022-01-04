import { action, createStore } from "easy-peasy";

const store = createStore({

    todos: ['Create store', 'Wrap application', 'Use store'],
    addTodo: action((state, payload) => {
      state.todos.push(payload);
    }),
    dashboardContent: "Dashboard",
    setContent: action((state, payload) => {
        state.dashboardContent = payload;
    }),
    sidebar: true,
    setSidebar: action((state, payload) => {
        state.sidebar = !state.sidebar
    }),
    detailDocument: "",
    setDetailDocument: action((state, payload) => {
        state.detailDocument = payload;
    })
  });

export default store;