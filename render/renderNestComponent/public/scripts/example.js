
class B extends React.Component {
  render() {
    return (
      <div className="IAmB">
        component B
      </div>
    );
  }
}

class A extends React.Component {
  render() {
    return (
      <div className="IAmA">
        component A
        <B />
      </div>
    );
  }
}

ReactDOM.render(
  <A />,
  document.getElementById('content')
);
