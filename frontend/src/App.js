import './App.css';
import BarberRoutes from './routes/BarberRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
          <CustomerRoutes />
          <BarberRoutes />
    </div>
  );
}

export default App;
