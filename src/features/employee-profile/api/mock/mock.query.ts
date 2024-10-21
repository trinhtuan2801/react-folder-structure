import { UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query';
import { mockGetApi } from './mock.api';
import { MockGetApi } from './mock.types';
import { QueryKey } from '#/constants';
export function useMockQuery(
  queryParams: Parameters<MockGetApi>[0],
  options?: Partial<UndefinedInitialDataOptions>
) {
  const query = useQuery({
    queryKey: [QueryKey.MOCK, queryParams.id],
    queryFn: () => mockGetApi(queryParams),
    ...options,
  });
  return query;
}
