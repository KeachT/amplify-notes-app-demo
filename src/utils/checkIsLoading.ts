export const checkIsLoading = (authStatus: string) =>
  authStatus !== 'unauthenticated' && authStatus !== 'authenticated'
