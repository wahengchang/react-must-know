class MyNotification extends React.Component {
  render() {
    // Clone the CSS styles and set the border-color CSS property.
    var styles = _.cloneDeep(this.constructor.styles);
    styles.notification.borderColor = this.props.color;
    // Render the notification box.
    return (
      <div style={styles.notification}>
        This is div : {this.props.prompt}
        <span style={styles.notificationHint}>{this.props.hint} />
      </div>);
  }
}
// Define the inline CSS styles for the notification here.
MyNotification.styles = {
  notification: {
    border: "5px solid green",
    padding: 10,  // Becomes "10px" when rendered.
    color: "#333"
  },
  notificationHint: {
    fontStyle: "italic"
  }
};

React.render(
  <MyNotification prompt="I &hearts; modular CSS.",
                  hint="And so should you!" color="green"/>,
  document.getElementById('content')
);