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


    dataSurat: 
    {
      keluar:
        [
          {
              id: 1,
              status: "Keluar",
              penerima: "Orang tua siswa",
              tanggal: "2021-06-08 13:10:14",
              document: "Surat pemberitahuan pembagian rapot.PDF",
              link: "#",
              grade: "Classified"
          },
          {
              id: 2,
              status: "Keluar",
              penerima: "PT Inovindo Digital Media",
              tanggal: "2021-03-21 15:16:11",
              document: "Pengajuan peserta prakerin 2021.PDF",
              link: "#",
              grade: "Non Public"
          },
          {
              id: 3,
              status: "Keluar",
              penerima: "Universitas ITB",
              tanggal: "2021-03-13 17:14:13",
              document: "Pengumuman penerimaan PPL.PDF",
              link: "#",
              grade: "Classified"
          },
          {
              id: 4,
              status: "Keluar",
              penerima: "Polrestabes Bandung",
              tanggal: "2021-08-30 09:01:10",
              document: "Daftar siswa peserta prakerin 2021.PDF",
              link: "#",
              grade: "Classified"
          }
        ],
      masuk: 
    
      [
        {
            id: 1,
            status: "Masuk",
            penerima: "Hubin",
            tanggal: "2021-06-08 13:10:14",
            document: "Pengesahan.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 2,
            status: "Masuk",
            penerima: "TU",
            tanggal: "2021-03-21 15:16:11",
            document: "Permintaan.PDF",
            link: "#",
            grade: "Non Public"
        },
        {
            id: 3,
            status: "Masuk",
            penerima: "HUBIN",
            tanggal: "2021-03-13 17:14:13",
            document: "Notice.PDF",
            link: "#",
            grade: "Classified"
        },
        {
            id: 4,
            status: "Masuk",
            penerima: "HUBIN",
            tanggal: "2021-08-30 09:01:10",
            document: "Permintaan List Siswa PKL.pdf",
            link: "#",
            grade: "Classified"
        }
      ],
    

      
    }
        ,
    setSataSuratMasuk: action((state, payload) => {
      state.dataSurat.masuk = payload;
    }),
    setSataSuratKeluar: action((state, payload) => {
      state.dataSurat.keluar = payload;
    }),
    km: "keluar",
    setKm: action((state,payload) => {
      state.km = payload
    })
   
  },
  {
    mergeStrategy: 'mergeShallow'
  }
  )
  );

export default store;