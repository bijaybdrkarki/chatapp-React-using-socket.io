import React, { useState } from 'react';
import HeaderSidebar from './component/headerSidebar';
import Mainbody from './component/main';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

const App =() => {
  const [menuclass, setmenuclass] = useState('others'); 
  function menu(){
      if (menuclass === 'others')
      {
          setmenuclass('others open');
      }
      else
      {
          setmenuclass('others');
      }
  }
    return (
     <> 
       <HeaderSidebar menuclass={menuclass} menu={menu}/>
       <Mainbody menuclass={menuclass} />
    </>)
}

export default App;