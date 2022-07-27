import styles from './ExpandedBike.module.css';
import useCollapse from 'react-collapsed';

const ExpandedBike = (props) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  return (
    <div className={styles.item}>
      <figure>
        <h2>{props.make} {props.model}</h2>
        <p>{props.year} | {props.style}</p>
      </figure>
      <br />
      <div className="collapsible-specs">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Full Specs -' : 'Full Specs +'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
      </div>
    </div>
  )
};

export default ExpandedBike;