import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect } from 'react';
import './Tab1.css';

import smartlookClient from 'smartlook-client'

const Tab1: React.FC = () => {

  useEffect(() => {
    console.warn("SOME LOG")
    // smartlookClient.init(, { region: 'eu' })
  }, [])

  // const handleIdentify = () => {
	// 	console.log(smartlookClient.identify(12345, {
	// 		name: 'John Doe',
	// 		email: 'email@domain.com',
	// 		// other custom properties
	// 	}))
	// }
	// const handleTrack = () => {
	// 	console.log(smartlookClient.track('transaction', {
	// 		value: 150,
	// 		currency: 'usd',
	// 		product: 'Product Description',
	// 		// other custom properties
	// 	}))
	// }
	// const handlePause = () => {
	// 	console.log(smartlookClient.pause())
	// }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      
        <div>
				{/* <button onClick={handleIdentify}>Identify visitor</button>
				<button onClick={handleTrack}>Track event</button>
				<button onClick={handlePause}>Pause recording</button> */}
			</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
