import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export function useAuth () {
  return useAuthState(auth);
}