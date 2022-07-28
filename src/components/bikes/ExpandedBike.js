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
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <th>Frameset</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Frame:</td>
                      <td>{props.frame}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Fork:</td>
                      <td>{props.fork}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Wheels</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Wheels:</td>
                      <td>{props.wheels}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Tires:</td>
                      <td>{props.tires}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Drivetrain</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Shifters:</td>
                      <td>{props.shifters}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Front Derailleur:</td>
                      <td>{props.fDerailleur}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Rear Derailleur:</td>
                      <td>{props.rDerailleur}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Crank:</td>
                      <td>{props.crank}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Cassette:</td>
                      <td>{props.cassette}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Chain:</td>
                      <td>{props.chain}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Pedals:</td>
                      <td>{props.pedals}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Components</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Saddle:</td>
                      <td>{props.saddle}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Handlebars:</td>
                      <td>{props.bar}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bar Grips:</td>
                      <td>{props.barGrip}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Brakes:</td>
                      <td>{props.brakes}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Brake Levers:</td>
                      <td>{props.levers}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Accessories/Misc.</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Size:</td>
                      <td>{props.size}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Front Light:</td>
                      <td>{props.frontLight}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Rear Light:</td>
                      <td>{props.rearLight}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Fenders:</td>
                      <td>{props.fenders}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Rack:</td>
                      <td>{props.rack}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Basket:</td>
                      <td>{props.basket}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bell:</td>
                      <td>{props.bell}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
};

export default ExpandedBike;