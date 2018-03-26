import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function DefaultLayout(props) {
  return (
    <Fragment>
      <div>
        Header
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/funThings">Fun Things</Link></li>
        </ul>
      </div>
      <div>Content for {props.route}</div>
      <div>Footer</div>
    </Fragment>
  );
}
