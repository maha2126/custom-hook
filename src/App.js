import { useFetch } from "./hooks/useFetch";
import { useInput } from "./hooks/useInput";


const URL = 'https://randomuser.me/api?results=20&inc=name,picture';

const App = () => {
  const Login = useInput("text")
  const Password = useInput("password")
  const handeleSubmit = e => {
    e.preventDefault()
    console.log(Login.value, Password.value);
  }
  return (
    <form onSubmit={handeleSubmit}>
      <input {...Login}/>
      <input {...Password}/>
      <button>Save</button>
    </form>
  )
 /*  const [loading, data, error] = useFetch(URL)

  if(loading){
    return <p>Loading...</p>
  }else if(error){
    return <p>ERROR:{error.message}</p>
  }
  return( 
    <>
    <ul>
      {
        data.results.map((elm,i) => {
        return <li key={i}>{elm.name.first}</li>
      })
      }
    </ul>
    </>
  )*/
} 
export default App;
