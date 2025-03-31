import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/react";

const Generator: React.FC = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [pokeName, setPokeName] = useState<string | null>(null);
  const [pokeImg, setPokeImg] = useState<string | null>(null);
  const [pokeStats, setPokeStats] = useState<any>(null);

  const getPokeData = () => {
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;

    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        const hp = data.stats[0].base_stat;
        const imgSrc = data.sprites.other.dream_world.front_default;
        const statAttack = data.stats[1].base_stat;
        const statDefence = data.stats[2].base_stat;
        const statSpeed = data.stats[5].base_stat;

        setPokeName(data.name);
        setPokeImg(imgSrc);
        setPokeStats({
          hp,
          attack: statAttack,
          defence: statDefence,
          speed: statSpeed,
        });
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        {pokeName && (
          <IonCard className="ion-padding">
            <IonCardTitle className="ion-text-center">
              {pokeName.toLocaleUpperCase()}
            </IonCardTitle>
            <IonCardContent>
              {pokeImg && (
                <img
                  src={pokeImg}
                  alt={pokeName}
                  height={"296"}
                  width={"293"}
                />
              )}
              {pokeStats && (
                <>
                  <p>HP: {pokeStats.hp}</p>
                  <p>Attack: {pokeStats.attack}</p>
                  <p>Defence: {pokeStats.defence}</p>
                  <p>Speed: {pokeStats.speed}</p>
                </>
              )}
            </IonCardContent>
          </IonCard>
        )}
        <IonButton onClick={getPokeData} expand="full">
          Generate
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Generator;
