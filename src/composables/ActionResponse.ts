export class ActionResponse<T> {
  public content: T | null = null;
  public success: boolean = false;

  constructor() {}
}
