import {useQuery} from '@tanstack/react-query';
import { classService } from '@/services/class/index';
import { QUERY_KEYS } from '@/constants/queryKeys';

export const useClassSessions = () =>
  useQuery({
    queryKey: QUERY_KEYS.workouts_sessions,
    queryFn: classService.getSessions
  })