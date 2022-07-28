import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";
import useCollapse from "react-collapsed";

import Card from '../UI/Card';
import LoadingWheel from '../UI/LoadingWheel';
import styles from './BikeForm.module.css';

const BikeForm = (props) => {
  const [isFormEnter, setIsFormEnter] = useState(false);
  
  const makeInputRef = useRef();
  const modelInputRef = useRef();
  const yearInputRef = useRef();
  const styleInputRef = useRef();
  const frameInputRef = useRef(); //material
  const sizeInputRef = useRef(); //drop down
  const forkInputRef = useRef(); //material
  const fDerailleurInputRef = useRef();
  const rDerailleurInputRef = useRef();
  const barInputRef = useRef();
  const barGripInputRef = useRef();
  const shiftersInputRef = useRef();
  const cassetteInputRef = useRef();
  const crankInputRef = useRef();
  const brakesInputRef = useRef();
  const leversInputRef = useRef();
  const pedalsInputRef = useRef();
  const saddleInputRef = useRef();
  const tiresInputRef = useRef();
  const wheelsInputRef = useRef();
  const frontLightInputRef = useRef();
  const rearLightInputRef = useRef();
  const fendersInputRef = useRef();
  const rackInputRef = useRef();
  const basketInputRef = useRef();
  const bellInputRef = useRef();
  const chainInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredMake = makeInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredStyle = styleInputRef.current.value;
    const enteredFrame = frameInputRef.current.value;
    const enteredSize = sizeInputRef.current.value;
    const enteredFork = forkInputRef.current.value;
    const enteredFDerailleur= fDerailleurInputRef.current.value;
    const enteredRDerailleur= rDerailleurInputRef.current.value;
    const enteredBar = barInputRef.current.value;
    const enteredBarGrips = barGripInputRef.current.value;
    const enteredShifters = shiftersInputRef.current.value;
    const enteredCassette = cassetteInputRef.current.value;
    const enteredCrank = crankInputRef.current.value;
    const enteredBrakes = brakesInputRef.current.value;
    const enteredLevers = leversInputRef.current.value;
    const enteredPedals = pedalsInputRef.current.value;
    const enteredSaddle = saddleInputRef.current.value;
    const enteredTires = tiresInputRef.current.value;
    const enteredWheels = wheelsInputRef.current.value;
    const enteredFrontLight = frontLightInputRef.current.value;
    const enteredRearLight = rearLightInputRef.current.value;
    const enteredFenders = fendersInputRef.current.value;
    const enteredRack = rackInputRef.current.value;
    const enteredBasket = basketInputRef.current.value;
    const enteredBell = bellInputRef.current.value;
    const enteredChain = chainInputRef.current.value;

    props.onAddBike({ make: enteredMake, model: enteredModel, year: enteredYear, style: enteredStyle, frame: enteredFrame, size: enteredSize, fork: enteredFork, fDerailleur: enteredFDerailleur, rDerailleur: enteredRDerailleur, bar: enteredBar, barGrips: enteredBarGrips, shifters: enteredShifters, cassette: enteredCassette, crank: enteredCrank, brakes: enteredBrakes, levers: enteredLevers, pedals: enteredPedals, saddle: enteredSaddle, tires: enteredTires, wheels: enteredWheels, frontLight: enteredFrontLight, rearLight: enteredRearLight, fenders: enteredFenders, rack: enteredRack, basket: enteredBasket, bell: enteredBell, chain: enteredChain });
  }

  const formCompleteHandler = () => {
    setIsFormEnter(false);
  };

  const formFocusedHandler = () => {
    setIsFormEnter(true);
  };

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <Fragment>
      <Prompt when={isFormEnter} message={(location) => 'Your information has not been saved. Are you sure you want to leave?'}/>
      <Card>
        <form onFocus={formFocusedHandler} className={styles.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={styles.loading}>
              <LoadingWheel />
            </div>
          )}
          <div className="row">
            <div className="col s12 m6">
              <div className={styles.control}>
                <label htmlFor='make'>Make</label>
                <input type='text' id='make' ref={makeInputRef} />
              </div>
              <div className={styles.control}>
                <label htmlFor='model'>Model</label>
                <input type='text' id='model' ref={modelInputRef} />
              </div>
            </div>
            <div className="col s12 m6">
            <div className={styles.control}>
              <label htmlFor='year'>Year</label>
              <input type='text' id='year' ref={yearInputRef} />
            </div>
            <div className={styles.control}>
              <label htmlFor='style'>Style</label>
              <input type='text' id='model' ref={styleInputRef} />
            </div>
            </div>
          </div>
          <div className="collapsible">
            <div className="header" {...getToggleProps()}>
              {isExpanded ? 'Advanced [-]' : 'Advanced [+]'}
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                <div className="row">
                  <div className="col s12 m6">
                    <div className={styles.control}>
                      <label htmlFor="frame">Frame</label>
                      <input type='text' id='frame' ref={frameInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="fork">Fork</label>
                      <input type='text' id='fork' ref={forkInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="fDerailleur">Front Derailleur</label>
                      <input type='text' id='fDerailleur' ref={fDerailleurInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="rDerailleur">Rear Derailleur</label>
                      <input type='text' id='rDerailleur' ref={rDerailleurInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="bar">Handlebar</label>
                      <input type='text' id='bar' ref={barInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="barGrip">Handlebar Grips</label>
                      <input type='text' id='barGrip' ref={barGripInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="shifters">Shifters</label>
                      <input type='text' id='shifters' ref={shiftersInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="cassette">Cassette</label>
                      <input type='text' id='cassette' ref={cassetteInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="frontLight">Front Light</label>
                      <input type='text' id='frontLight' ref={frontLightInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="rearLight">Rear Light</label>
                      <input type='text' id='rearLight' ref={rearLightInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="bell">Bell</label>
                      <input type='text' id='bell' ref={bellInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="size">Size</label>
                      <input type='text' id='size' ref={sizeInputRef} />
                    </div>
                  </div>
                  <div className="col s12 m6">
                  <div className={styles.control}>
                      <label htmlFor="brake">Brakes</label>
                      <input type='text' id='brakes' ref={brakesInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="levers">Levers</label>
                      <input type='text' id='levers' ref={leversInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="pedals">Pedals</label>
                      <input type='text' id='pedals' ref={pedalsInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="saddle">Saddle</label>
                      <input type='text' id='saddle' ref={saddleInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="tires">Tires</label>
                      <input type='text' id='tires' ref={tiresInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="wheels">Wheels</label>
                      <input type='text' id='wheels' ref={wheelsInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="crank">Crank</label>
                      <input type='text' id='crank' ref={crankInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="chain">Chain</label>
                      <input type='text' id='chain' ref={chainInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="fenders">Fenders</label>
                      <input type='text' id='fenders' ref={fendersInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="rack">Rack</label>
                      <input type='text' id='rack' ref={rackInputRef} />
                    </div>
                    <div className={styles.control}>
                      <label htmlFor="basket">Basket</label>
                      <input type='text' id='basket' ref={basketInputRef} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.actions}>
            <button onClick={formCompleteHandler} className='btn'>Add Bike</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BikeForm;