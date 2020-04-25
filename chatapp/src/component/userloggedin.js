import React, {useState} from 'react';
import HeaderSidebar from './headerSidebar';
import Mainbody from './mainbody';




const UserLoggedin = () => { 
    
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
       <HeaderSidebar menuclass={menuclass} menu={menu} />
       <Mainbody menuclass={menuclass} />
    </>
)}

export default UserLoggedin;
