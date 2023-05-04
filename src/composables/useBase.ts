import { UserMessageType, useUserMessageStore } from '@/store/userMessage.store';

class ActionResponse<T> {
  public content: T | null = null;
  public success: boolean = false;

  constructor() {
  }
}

export const useBase = () => {
  const userMessageStore = useUserMessageStore();

  async function executeApiAction<T = any>(
    actionToExecute: Promise<T>,
    succeededCallback?: (content: T) => void,
  ): Promise<ActionResponse<T>> {
    const actionResponse = new ActionResponse<T>();
    await actionToExecute
      .then((response: any) => {
        if (!response.succeeded) handleErrors(response);
        actionResponse.success = true;
        actionResponse.content = response.data;
      })
      .catch(error => {
        console.error(hasResponseData(error) ? error.response.data : error.message);
        handleErrors(error);
      });

    if (actionResponse.success && succeededCallback) {
      succeededCallback(actionResponse.content!);
    }

    return actionResponse;
  }

  function hasResponseData(error: any): boolean {
    return 'response' in error && 'data' in error.response;
  }

  function handleErrors(error: any) {
    showErrorMessage(hasResponseData(error) ? error.response.data : error.message);
  }

  function showErrorMessage(message: string) {
    userMessageStore.storeUserMessage({ type: UserMessageType.error, message: message });
  }

  return {
    executeApiAction,
  };
};
