import type { MockGetApi } from './mock.types';

export const mockGetApi: MockGetApi = async ({ id }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await response.json();
  return data;
};
