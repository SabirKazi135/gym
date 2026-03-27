import axios from 'axios';
import { SessionType, MarkWorkoutCompletionType } from './class.mock';

export const classApiService = {
    getSessions: async (): Promise<SessionType> => {
  const { data } = await axios.get("/class/sessions")
  return data
},
  markWorkoutCompleted: async ({session_id, index}:MarkWorkoutCompletionType) => {
    await axios.post("/class/sessions/mark-completed", {session_id, index});
  }
}