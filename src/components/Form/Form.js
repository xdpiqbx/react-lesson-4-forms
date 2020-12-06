import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
    colors: [
      { value: 'red', isChecked: false },
      { value: 'green', isChecked: false },
      { value: 'blue', isChecked: false },
    ],
  };

  // Для связки инпутов и лейблов нужно
  unicIdName = uuidv4();
  unicIdTag = uuidv4();
  unicIdLicrnse = uuidv4();

  // handleInputChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({
  //     inputValue: event.currentTarget.value,
  //   });
  // };

  // Паттерн для инпутов у которых есть name, value
  // Не работает для чекбоксов но работает для радио
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmitHandler(this.state);
    this.reset();
    // console.log(this.state);
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
    });
  };

  handleLicenseChange = event => {
    this.setState({
      license: event.currentTarget.checked,
    });
  };

  handleCheckboxColorChoose = event => {
    const colorObj = {
      value: event.currentTarget.value,
      isChecked: event.currentTarget.checked,
    };

    this.setState(prevState => ({
      colors: [
        //Разворачиваю предидущий State с инверсией состояния Checked
        ...prevState.colors.map(color => {
          if (color.value === colorObj.value) {
            color.isChecked = colorObj.isChecked;
          }
          return color;
        }),
      ],
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.colors);
    console.log(this.state.colors);
    console.log(prevState.colors === this.state.colors);
  }

  render() {
    const { name, tag, colors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {/*htmlFor="" */}
          <span>Name</span>
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
        </label>

        {/* Тут связал по идентификатору */}
        <label htmlFor={this.unicIdTag}>
          <span>Nick</span>
        </label>
        <input
          id={this.unicIdTag}
          type="text"
          value={tag}
          name="tag"
          onChange={this.handleChange}
        />

        <div>
          <p>Ваш уровень:</p>
          <label>
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
            <span>Junior</span>
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
            <span>Middle</span>
          </label>
          <label>
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
            <span>Senior</span>
          </label>
        </div>

        <div>
          <input
            type="checkbox"
            name="license"
            id={this.unicIdLicrnse}
            checked={this.license}
            onChange={this.handleLicenseChange}
          />
          <label htmlFor={this.unicIdLicrnse}>Лицензионное соглашение</label>
        </div>

        <div>
          {colors.map(color => {
            return (
              <label key={uuidv4()}>
                <span>{color.value}</span>
                <input
                  type="checkbox"
                  name="color"
                  value={color.value}
                  checked={color.isChecked}
                  onChange={this.handleCheckboxColorChoose}
                />
              </label>
            );
          })}
        </div>

        <button type="submit" disabled={!this.state.license}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;

//https://youtu.be/2tPxoJxaCes?t=608

//радиобатоны=)
//https://youtu.be/2tPxoJxaCes?t=1879

//как правильно делать чекбоксы
//https://youtu.be/2tPxoJxaCes?t=2657
//http://react.tips/checkboxes-in-react-16/

// Делаем 1 чекбокс
//https://youtu.be/2tPxoJxaCes?t=2783

//https://youtu.be/2tPxoJxaCes?t=3065
