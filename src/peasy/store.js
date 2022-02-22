import { persist,action, createStore } from "easy-peasy";

const store = createStore(
  persist(
  {
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
    }),
    
    authorized: false,
    setAuthorized: action((state,payload) => {
    state.authorized = payload;
    })
      
    ,
    pageLoading: true,
    setPageLoading: action((state, payload)=>{
      state.pageLoading = payload
    }),
    dataLoading: false,
    setDataLoading: action((state, payload)=>{
      state.dataLoading = payload
    }),
    loginLoading: true,
    setLoginLoading: action((state, payload)=>{
      state.loginLoading = payload
    }),

    dataUser: {},
    dataSurat: 
    {
      keluar:
        [
          
        ],
      masuk: 
    
      [
        
      ],
    

      
    }
        ,
    setDataUser: action((state,payload) => {
      state.dataUser = payload
    }),
    setSataSuratMasuk: action((state, payload) => {
      state.dataSurat.masuk = payload;
    }),
    setSataSuratKeluar: action((state, payload) => {
      state.dataSurat.keluar = payload;
    }),
    km: "masuk",
    setKm: action((state,payload) => {
      state.km = payload
    }),
    detail: {},
    setDetail: action((state,payload) => {
      state.detail = payload
    }),
    userData: {},
    setUserData: action((state,payload) => {
      state.userData = payload
    }),
    dataRekap: [],
    setdataRekap: action((state,payload) => {
      state.dataRekap = payload
    }),
    editUser: false,
    setEditUser: action((state,payload) => {
      state.editUser = payload
    }),
    dashboard: {},
    setDashboard: action((state, payload) => {
      state.dashboard = payload
    })
   
  },
  {
    mergeStrategy: 'mergeShallow'
  }
  )
  );

export default store;