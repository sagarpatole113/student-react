import Dashbord from "./components/Dashbord";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewStudenForm from "./components/NewStudenForm";
import EditStudentForm from "./components/EditStudentForm";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  
  return (
    <div className="App">
<ToastContainer/>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="home" element={ <Dashbord/>} /> 
          <Route path="add-student" element={ <NewStudenForm/>} />
          <Route path="edit-student" element={<EditStudentForm />} />
          <Route path="delete-student" element={<Dashbord/>} />
        </Route>
      </Routes>
    </BrowserRouter>
<ToastContainer />
    </div>
  );
}

export default App;
