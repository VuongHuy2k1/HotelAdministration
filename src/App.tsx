import React from 'react'
import { Fragment } from 'react'
import { Routes, Route} from 'react-router-dom'
import { PublicRoutes} from './routes'
import DefaultLayout from './layouts/defaultLayout'
import config from './config'
interface RouteProps {
  path: string;
  component: React.ComponentType<any>;
  layout?: React.ComponentType<any> | null;
}
function App() {
  return (
    <div className="App">
      <>
        <Routes>
          {PublicRoutes.map((route:any, index:number) => {
            const Page = route.component
            let Layout: React.ComponentType<any> = DefaultLayout;


            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
         
        </Routes>
      </>
    </div>
  );
}

export default App;
