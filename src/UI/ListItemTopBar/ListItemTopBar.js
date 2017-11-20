import React from 'react';
import c from 'classnames';
import Icon from '../../icons/Icon';


const ListItemTopBar = ({ collapsed, onCollapseToggle, onRemove, dragHandleHOC, className }) => {
  const DragHandle = dragHandleHOC && dragHandleHOC(() =>
    <span className="nc-listItemTopBar-dragIcon">
      <Icon type="drag-handle" size="small"/>
    </span>
  );

  return (
    <div className={c('nc-listItemTopBar', className)}>
      {
        onCollapseToggle
          ? <button className="nc-listItemTopBar-toggleButton" onClick={onCollapseToggle}>
              <Icon type="caret" size="small" direction={collapsed ? 'up' : 'down'}/>
            </button>
          : null
      }
      { dragHandleHOC ? <DragHandle/> : null }
      {
        onRemove
          ? <button className="nc-listItemTopBar-removeButton" onClick={onRemove}>
              <Icon type="close" size="small"/>
            </button>
          : null
      }
    </div>
  );
};

export default ListItemTopBar;