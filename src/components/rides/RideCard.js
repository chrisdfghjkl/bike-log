import styles from './RideCard.module.css';

const RideCard = () => {
  return(
    <div>
      <button type="button" className={styles.btn}>+ Post Ride</button>
      <div className={styles.card}>
        <img className={styles.img} src="https://i.imgur.com/SipWtRx.jpg" alt="Avatar" />
        <div className={styles.container}>
          <h4><b>Easy Weekend Ride</b></h4> 
          <p>August 6</p> 
          <button type='button' className='btn'>More Info / RSVP</button>
        </div>
      </div>
      <div className={styles.card}>
        <img className={styles.img} src="https://i.imgur.com/SipWtRx.jpg" alt="Avatar" />
        <div className={styles.container}>
          <h4><b>Sam's Birthday Ride</b></h4> 
          <p>August 15</p> 
          <button type='button' className='btn'>More Info / RSVP</button>
        </div>
      </div>
    </div>
  )
};

export default RideCard;
