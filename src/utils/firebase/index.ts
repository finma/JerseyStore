import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {DataSnapshot, onValue, ref, set} from 'firebase/database';
import {auth, database} from 'src/config/Firebase';

export const registerUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const writeData = (path: string, data: any) =>
  set(ref(database, path), data);

export const readDataOnce = (
  path: string,
  cb: (snapshot: DataSnapshot) => void,
) =>
  onValue(ref(database, path), cb, {
    onlyOnce: true,
  });
