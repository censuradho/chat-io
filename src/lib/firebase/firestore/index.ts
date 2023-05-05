import {
  query,
  collection,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "..";

import { CreteMessagePayload } from "./types";
import { User } from "firebase/auth";


export const queryMessages = query(
  collection(db, "messages"),
  orderBy("created_at"),
  limit(50)
);

export async function sendMessage (payload: CreteMessagePayload) {
  return await addDoc(collection(db, "messages"), {
    text: payload.text,
    name: payload.name,
    avatar: payload?.avatar,
    created_at: serverTimestamp(),
    uid: payload.uid,
  });
}

export async function upsertUser (user: User) {
  await setDoc(doc(db, 'user', user.uid), user)
}

export const queryGetMessagesByGroupId = (id: string) => {
  return query(
    collection(db, `message/${id}`),
    orderBy("created_at"),
    limit(50)
  )
} 