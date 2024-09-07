import { useMutation } from "@tanstack/react-query";

import { dayActivitiesService } from "../services/dayActivitiesService";

interface CreateActivityProps {
  tripCode: string;
  title: string;
  occursAt: string;
}

export function useCreateDayActivity() {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (data: CreateActivityProps) =>
      dayActivitiesService.create(data),
  });

  return { isPending, mutateAsync };
}
