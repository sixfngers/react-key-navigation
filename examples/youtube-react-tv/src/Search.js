import React from 'react';
// import ReactTV from 'react-tv';

import { Focusable } from 'react-key-navigation'

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  onBlur() {
    this.setState({active: false});
  }

  onFocus() {
    this.setState({active: true});
  }

  onEnterDown(event, navigation) {
    console.log('enter pressed');
    navigation.forceFocus('sidebar');
  }

  onSupportedKeyDown(event, navigation) {
    console.log('onSupportedKeyDown', event, navigation);

    switch(event){
      case "space":
        this.onEnterDown(event, navigation);
        break;

      case "esc":
        navigation.focusDefault();
        break;

      case "p":
        console.log("p was pressed");
        break;

      default:
        console.log("unsupported key ", event, " was pressed");
    }

  }


  render() {
    return (
      <Focusable onFocus={() => this.onFocus()} onBlur={() => this.onBlur()} onEnterDown={(e, n) => this.onEnterDown(e, n)} onSupportedKeyDown={(e, n) => this.onSupportedKeyDown(e, n)} navDefault>
        <div class={this.state.active ? 'search-box-placeholder-focus' : ''} id="search-box-placeholder"><i class="fa fa-search"></i></div>
      </Focusable>
    );
  }
}
