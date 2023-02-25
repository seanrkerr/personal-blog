interface User {}
interface TheUser {
  getSalary(id: string): Promise<User>;
}
interface SomeClientOfSomething {
  request(method: string, endpoint: string): Promise<{ data: any }>;
}
export default class Employee implements TheUser {
  constructor(private readonly someClient: SomeClientOfSomething) {}

  public async getSalary(id: string): Promise<User> {
    const response = await this.someClient.request(
      "GET",
      `/users/details/${id}`
    );

    return response.data;
  }
}
