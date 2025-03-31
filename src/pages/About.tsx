import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonText>
          <h1>About the Pokémon Generator</h1>
          <p>
            The app pulls Pokémon data, including their stats and images, from a
            reliable Pokémon API and displays them in a simple and user-friendly
            interface.
          </p>
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default About;
