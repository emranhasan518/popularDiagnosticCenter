import { initializeApp } from "firebase/app";
import firebaseConfig from './firenase.consig'

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;