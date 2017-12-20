import  React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { Breadcrumb, IBreadcrumbItem} from 'office-ui-fabric-react/lib/Breadcrumb';
import { IContextualMenuItem} from 'office-ui-fabric-react/lib/ContextualMenu';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { Selection,
         SelectionMode,
         SelectionZone
       } from 'office-ui-fabric-react/lib/utilities/selection';
import { Check } from 'office-ui-fabric-react/lib/Check';
import { identity, createListItems } from '../utils/';
import { menuItems as defaultMenuItems,
         farMenuItems as defaultFarMenuItems } from './items.js';
import '../styles/content.css';

class Content extends React {
  constructor (props) {
    super (props);

    this.state = {
      items: createListItems(200),
      selection: new Selection({ onselectionChanged: this._onselectionChanged}),
      selectionMode: SelectionMode.multiple,
      canselect: 'all',
    }

    this.state.selection.setItems(this.state.items, false)
}
    componentDidMount() {
       this._hasMounted = true
     }

    _onselectionChanged = () => {
      if (this._hasMounted) this.forceUpdate()
    }
  render () {
    const { breadcrumbs, maxBreadcrumbs, menuItems, farMenuItems } = this.props
    const { items, selection, SelectionMode } = this.state

    return (
      <div>
        
      </div>
    );
  }
}
export default Content;
