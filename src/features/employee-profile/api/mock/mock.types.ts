export type MockGetApi = ({ id }: { id: string }) => Promise<MockGetApiResponse>;

export type MockGetApiResponse = {
  id: string;
};
