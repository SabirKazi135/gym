import { QUERY_KEYS } from '@/constants/queryKeys'
import { progressService } from '@/services/Progress/index'
import { useQuery } from '@tanstack/react-query'

export const useProgress = () => useQuery({
    queryKey: QUERY_KEYS.progress,
    queryFn: progressService.getProgress
})