import './App.css';
import CardList from './cardList';
import Main_Photo from './mainlogo';
import SearchBar from './searchbar';
import Mid_section from './mid';
import BottomBar from './bottomsection';
import Top_section from './top_section';
import Btm_section from './featured_college';
import Mid_section2 from './mid2';
import Footer from './footer';
import CardList2 from './Mycollages';

function App() {
  return (
    <div>
      <SearchBar/>   
      <Main_Photo/>
      <Top_section/>
      <CardList />
      <Mid_section />
      <CardList2/>
      <Btm_section/>
      <Mid_section2/>
      <Bot_sec/>
      <Footer/>
    </div>
  );
}

export default App;
