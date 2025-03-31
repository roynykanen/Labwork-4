import {
  IonButton,
  IonContent,
  IonMenu,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonSplitPane,
  IonMenuToggle,
  IonItem,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import Home from "./Home";
import About from "./About";
import Generator from "./Generator";
import {
  homeOutline,
  infiniteOutline,
  informationOutline,
  logOutOutline,
} from "ionicons/icons";

const Menu: React.FC = () => {
  const history = useHistory();

  const logout = async () => {
    await signOut(FIREBASE_AUTH);
    history.push("/");
  };

  const paths = [
    { name: "Home", url: "/app/home", icon: homeOutline },
    { name: "Generator", url: "/app/generator", icon: infiniteOutline },
    { name: "About", url: "/app/about", icon: informationOutline },
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index}>
                <IonItem routerLink={item.url} routerDirection="none">
                  <IonIcon icon={item.icon} slot="start"></IonIcon>
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonButton
              routerLink="/"
              routerDirection="back"
              expand="full"
              color={"danger"}
              onClick={logout}
            >
              <IonIcon icon={logOutOutline} slot="start"></IonIcon>
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/home" component={Home} />
          <Route exact path="/app/about" component={About} />
          <Route exact path="/app/generator" component={Generator} />
          <Route exact path="/app">
            <Redirect to="/app/home" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
