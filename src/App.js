import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.css'
import Dashboard from './Dashboard';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Books from './Books';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Createbooks from './Createbooks';
import Bookview from './Bookview';
import Editbook from './Editbook';
import Login from './Login';
import Members from './Members';
import Createmember from './Createmember';
import Membersview from './Membersview';
import Editmember from './Editmember';

function App() {
  return (
    <BrowserRouter>

   
     <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
    <Topbar />
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/books' element={<Books/>}/>
  <Route path='/create-book' element={<Createbooks/>}/>
  <Route path='/books/:id' element={<Bookview/>}/>
  <Route path='/books/edit/:id' element={<Editbook/>}/>
  <Route path='/Members' element={<Members/>}/>
  <Route path='/create-member' element ={<Createmember/>}/>
  <Route path='Members/:id' element={<Membersview/>}/>
  <Route path='/Members/edit/:id' element={<Editmember/>}/>

    </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
