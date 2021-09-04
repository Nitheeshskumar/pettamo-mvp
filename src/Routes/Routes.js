import React from 'react'
import { Switch, Redirect, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../Utils/ErrorBoundary';
import RouteGuard from './RouteGuard'
import ContextStore from '../ContextStore/ContextStore'
import MainWrapper from '../Modules/MainWrapper';
const Login = React.lazy(()=>import('../Modules/Login'))
const ServiceProviderContainer = React.lazy(()=>import('../Modules/ServiceProvider/ServiceProviderContainer'))
const ProviderDetail = React.lazy(()=>import('../Modules/ServiceProvider/ServiceProviderDetail'))
// const Admin = React.lazy(()=>import('../Modules/Admin/Admin'))
const Appointments = React.lazy(()=>import('../Modules/Appointments/Appointments'))
const Profile = React.lazy(()=>import('../Modules/Profile/Profile'))

const RootRoutes = () => (
    <BrowserRouter>
      <ContextStore>
        <ErrorBoundary>
          <MainWrapper>
            <React.Suspense
              fallback={
                <>
                  <div className="linear-activity">
                    <div className="indeterminate"></div>
                  </div>
                  <div className="loader_wrap loader"></div>
                </>
              }
            >
              <Switch>
                {/* <RouteGuard path="/login" xComponent={Login} /> */}
                <RouteGuard path="/dashboard" xComponent={ServiceProviderContainer} />
                <RouteGuard path="/detail" xComponent={ProviderDetail} />
                <RouteGuard path="/appointments" xComponent={Appointments} />
                <RouteGuard path="/profile" xComponent={Profile} />
                {/* <RouteGuard path="/admin" xComponent={Admin} /> */}
                <Redirect from="*" to="/dashboard" push />
                </Switch>
          </React.Suspense>
        </MainWrapper>
      </ErrorBoundary>
    </ContextStore>
  </BrowserRouter>
);

export default RootRoutes;