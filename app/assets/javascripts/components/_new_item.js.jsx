var NewItem = React.createClass({
  getInitialState() {
    return { name: '', description: '' }
  },

  handleSubmit(event) {
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: this.nameInput.value, description: this.descriptionInput.value } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
    event.preventDefault()
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={(input) => { this.nameInput = input; }} placeholder='Enter the name of the item' />
        <input ref={(input) => { this.descriptionInput = input; }} placeholder='Enter a description'/>
        <input type='submit' value='Submit'/>
      </form>
    )
  },
  onChange(key) {
    return (event) => {
      const value = event.target.value;
      this.setState({ [key]: value });
    }
  }
});
