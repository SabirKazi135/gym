import { useMutation, useQueryClient } from "@tanstack/react-query"
import { classService } from '@/services/class/index';
import { QUERY_KEYS } from '@/constants/queryKeys';
import {MarkWorkoutCompletionType} from '@/services/class/class.mock'

export const useCompleteWorkout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ session_id, index }: MarkWorkoutCompletionType) =>
      classService.markWorkoutCompleted({session_id, index}),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.workouts_sessions
      })
    }
  })
}