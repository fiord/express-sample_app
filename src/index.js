var React = require('react');
var ReactDOM = require('react-dom');
var rrd = require('react-router-dom');
var BrowserRouter = rrd.BrowserRouter;
var Route = rrd.Route;
var Link = rrd.Link;
var EmployeeList = require('./EmployeeList');
var EmployeeDetail = require('./EmployeeDetail');

class ExpressSampleApp extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/employees">employee</Link></li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees" component={EmployeeList} />
          <Route path="/employees/:id" component={EmployeeDetail} />
          <Route path="/employees/new" component={EmployeeNew} />
          <Route path="/employees/:id/edit" component={EmployeeEdit} />
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}


// DOMのレンダリング処理
//   see. https://reactjs.org/docs/react-dom.html#render
ReactDOM.render(
  <ExpressSampleApp />,            // Appをレンダリングする
  document.getElementById('root')  // id=root要素に対してレンダリングする
);
