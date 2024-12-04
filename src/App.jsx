import Admin from "./components/admin"
import { Details } from "./components/Details"

function App() {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Admin/>}/>
      <Route path="/Details" element={<Details/>}/>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute}/>
        
    </>
  )
}

export default App
