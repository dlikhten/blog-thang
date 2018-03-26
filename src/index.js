import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import DefaultLayout from 'components/Layout/default';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <div>
        <Route exact path="/" render={({ match } ) => (
          <DefaultLayout route="home" />
        )} />
        <Route path="/funThings" render={({ match }) => (
          <DefaultLayout route="fun things" />
        )} />
      </div>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);

module.hot.accept();
