import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Login } from './pages';
import { Layout } from './components';

const DashboardRoute = [
  {
    path: '/',
    component: Dashboard,
    exact: true,
  },
];

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path={DashboardRoute.map((r) => r.path)}>
        <Layout>
          {DashboardRoute.map((r) => (
            <Route
              key={r.path}
              exact={r.exact}
              path={r.path}
              component={r.component}
            />
          ))}
        </Layout>

      </Route>
    </Switch>
  </Router>
);

export default Routes;
