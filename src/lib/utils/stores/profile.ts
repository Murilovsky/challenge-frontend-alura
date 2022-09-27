import { writable } from "svelte/store";
import type User from "../interfaces/IUser";

const { subscribe, set, update } = writable<User>()

export const profile = {
   subscribe, set, update,
}