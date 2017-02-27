class GrandChild extends React.Component {

  componentDidMount() {
    console.log('GrandChild did mount.');
  }

  value() {
    return ReactDOM.findDOMNode(this.refs.input).value;
  }

  render() {
    return (
      <div>
        GrandChild
        <input ref="input" type="text" defaultValue="foo" />
      </div>
    );
  }
}

class Child extends React.Component {

  componentDidMount() {
    console.log('Child did mount.');
  }

  value() {
    return this.refs.grandChild.value();
  }

  render() {
    return (
      <div>
        Child
        <GrandChild ref="grandChild" />
      </div>
    );
  }
}


class Parent extends React.Component {

  componentDidMount() {
    console.log('Parent did mount.');
    console.log('Child value:', this.refs.child.value());
  }

  render() {
    return (
      <div>
        Parent
        <Child ref="child" />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('content')
);