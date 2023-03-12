class ActionResponse<T> {
  public content: T | null = null;
  public success: boolean = false;
  constructor() {}
}

export const useBase = () => {
  async function executeApiAction<T = any>(
    actionToExecute: Promise<T>,
    succeededCallback?: (content: T) => void
  ): Promise<ActionResponse<T>> {
    const actionResponse = new ActionResponse<T>();
    await actionToExecute
      .then((response: any) => {
        actionResponse.success = true;
        actionResponse.content = response;
      })
      .catch(error => {
        console.error(hasResponseData(error) ? error.response.data : error.message);
      });

    if (actionResponse.success && succeededCallback) {
      succeededCallback(actionResponse.content!);
    }

    return actionResponse;
  }

  function hasResponseData(error: any): boolean {
    return 'response' in error && 'data' in error.response;
  }

  return {
    executeApiAction,
  };
};
