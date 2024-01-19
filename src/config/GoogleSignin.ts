import { GoogleSignin } from '@react-native-community/google-signin';
import { PUBLIC_API_ENDPOINT_HOST, CLIENT_ID } from '@env';


export const googleSigninInitialize  = () => {
    GoogleSignin.configure({
        webClientId: CLIENT_ID,
        offlineAccess: true,
    });
}

