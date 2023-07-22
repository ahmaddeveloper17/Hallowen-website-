
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Category from './components/Category/category';
import About from './components/About/about'
import Trick from './components/Trick/trick';
import Discount from './components/Discount/discount';
import Arrivals from './components/Arrivals/arrivals';
import Newsletter from './components/Newsletter/newsletter'
import Footer from './components/Footer/footer';
function App() {
  return (
    <div>
       <Header/>
    <Category/>
    <About/>
  <Trick/>
  <Discount/>
  <Arrivals/>
  <Newsletter/>
  <Footer/>
    </div>
  );
}

export default App;
