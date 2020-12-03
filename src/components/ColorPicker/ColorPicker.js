import React, { Component } from 'react';
import './ColorPicker.css';

// const styles = {
//     option: {
//         display: 'inline-block',
//         width: 40,
//         height: 40,
//         margin: 2
//     }
// }

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (this.state.activeOptionIdx === index) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  setActiveIdx = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  render() {
    const { options } = this.props;
    const { activeOptionIdx } = this.state;

    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">ColorPicker</h2>
        <p>Выбран: {label}</p>
        <div>
          {options.map(({ label, color }, index) => {
            return (
              <button
                className={this.makeOptionClassName(index)}
                style={{ backgroundColor: color }}
                key={label}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
