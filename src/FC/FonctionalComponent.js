import { useContext, useEffect, useState ,React} from "react";
import { MyContext } from "..";


function FunctionnalComponent() {
  const contextValue = useContext(MyContext);
  
  const [{color,background}, setColor] = useState({});
 
  useEffect(() => {
    console.log(
      "cette fonction va etre execute la premiere fois et a chaque modification de la variable color "
    );
    console.log("car le deuxieme argument est color ");
    
    
  }, []);

//   

  return (
    <div>
      for background :
      <input
        onChange={(e) =>
          setColor(() => ({ background: e.target.value }))
        }
      />
      for color :
      <input
        onChange={(e) =>
          setColor((current) => ({  ...current,color: e.target.value }))
        }
      />
      <h1>
        My favaroute color is {color}, {background}{" "}
      </h1>

      <p>Welcome {contextValue.username} ,</p>{contextValue.loggedIn? <p> You are Online</p> : <p> You are Offline</p> }
    </div>
  );
}
export default FunctionnalComponent;
