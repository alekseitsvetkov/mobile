// import { Errors } from '_app/constants';
// import { messaging, crashlytics, auth } from './firebase';
import { StorageErrorTypes, removeToken } from './storage';

export const handleLoginError = async (errorType: string) => {
  switch (errorType) {
    case StorageErrorTypes.Expired:
      await signOut();
      break;

    case StorageErrorTypes.NotFound:
      break;

    default:
      break;
  }
};

export const signOut = async () => {
  try {
    // await messaging.deleteToken();
    await removeToken();
    // await auth.signOut();
  } catch ({ message }) {
    console.log({ message });
    // crashlytics.recordCustomError(Errors.SIGN_OUT, message);
  }
};
