
class B extends React.Component {
  render() {
    return (
      <div className="IAmB">
        component A: value = {this.props.value}
      </div>
    );
  }
}

class A extends React.Component {
  render() {
    return (
      <div className="IAmA">
        component A: value = {this.props.value}
        <B value={this.props.value * this.props.value}/>
      </div>
    );
  }
}

ReactDOM.render(
  <A value={2} />,
  document.getElementById('content')
);
