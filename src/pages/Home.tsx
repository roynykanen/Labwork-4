import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <IonText className="ion-text-center">
          <h1>Welcome to the Pokémon Generator!</h1>
          <p>
            Are you ready to discover a new Pokémon? Click the Generate button
            to randomly fetch a Pokémon, complete with its stats and image!
            Whether you're a long-time Pokémon fan or just curious about these
            incredible creatures, each click will bring a fresh Pokémon
            experience.
          </p>
          <h3>What you can expect:</h3>
          <ul>
            <li>
              <strong>Random Pokémon:</strong> Every click generates a unique
              Pokémon from the classic 150.
            </li>
            <li>
              <strong>Detailed Stats:</strong> View the Pokémon's stats,
              including HP, Attack, Defence, and Speed.
            </li>
            <li>
              <strong>Fun and Interactive:</strong> Easily generate a new
              Pokémon each time you hit the button!
            </li>
          </ul>
          <p>
            Click the button to get started and see which Pokémon you’ll
            discover next!
          </p>
        </IonText>
        <IonButton routerLink="/app/generator" expand="full">
          Go to Generator
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
