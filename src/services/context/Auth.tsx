import React, { createContext, useEffect, useState } from "react";
import 'core-js/stable/atob';
import { AuthContext, User } from "../../types/contextTypes/Auth";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode, JwtPayload} from 'jwt-decode';
import { 
    PUBLIC_API_ENDPOINT_HOST,
    CLIENT_ID_IOS,
    CLIENT_ID_ANDROID,
    CLIENT_ID_WEB,
    REDIRECT_URL,
    GOOGLE_FETCH_USER_INFO
} from '@env';
import { navigationRef } from "../RootNavigation";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';



const defaultValue = {
    AUTH: false,
    user: {},
    loading: false,
    provider: null,
    result:{},
    message:'',
    retrieveToken: () => {},
    signup: (name: string, email:string, password: string, confirmPassword: string) => {},
    signin: (email:string, password: string) => {},
    logout: () => {},
    signinWithGoogle: () => {},
    forgetPassword: (email: string) => {}
} as AuthContext

export const AuthManagementContext = createContext(defaultValue);

const Auth = ({children}: {children: React.ReactNode}) => {

    const [AUTH, setAUTH] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [provider, setProvider] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [message, setMessage] = useState(null);

    const navigation = navigationRef;


    const retrieveToken = async () => {

        try
        {
            const token = await AsyncStorage.getItem('token');
            const profile = await AsyncStorage.getItem('profile');
            const provider = await AsyncStorage.getItem('provider');

            if (token && token !== null && profile)
            {
                const userInfo:User = JSON.parse(profile);
                const currentTimeInSeconds = Math.floor(Date.now() / 1000);
                const decode = await jwtDecode<JwtPayload>(token);
                if (!decode || !decode.exp || decode.exp <= currentTimeInSeconds)
                {
                    navigation.navigate('Signin');
                    alert('Session expired, please signin to continue.');
                    setAUTH(false);
                    setUser(null);
                    setProvider(null);
                    await AsyncStorage.removeItem('token');
                    await AsyncStorage.removeItem('profile');
                    await AsyncStorage.removeItem('provider');
                }
                else
                {
                    setAUTH(true);
                    setProvider(provider);
                    setUser(userInfo);
                    navigation.navigate('Auth Screen');
                }
                
            }
            else
            {
                setAUTH(false);
                setUser(null);
            }
            
        }
        catch(err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }
        
    }
    
    //signup handling
    const signup = async (name: string, email: string, password: string, confirmPassword: string) => {

        setLoading(true);
        const user = {
            name: name,
            email: email,
            password: password,
            passwordConfirm: confirmPassword
        }

        try
        {
            const url = `${PUBLIC_API_ENDPOINT_HOST}/auth/signup`;
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const result = await response.json();
            if (result.type === 'failed' && result.message)
            {
                if (result.element)
                {
                    setResult(result);
                }
                else
                {
                    alert(result.message);
                }
            } 
            else if (result.type === 'success' && result.auth === 'true')
            {
                await AsyncStorage.setItem('token', JSON.stringify(result.token));
                await AsyncStorage.setItem('provider', 'Server');
                await AsyncStorage.setItem('profile', JSON.stringify(result.user));
                navigation.navigate('Home');
            }
        }
        catch (err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }
        finally
        {
            setLoading(false);
            await retrieveToken();
        }

    }


    //signin handling
    const signin = async (email: string, password: string) => {

        setLoading(true);

        const user = {
            email: email,
            password: password,
        }

        try
        {
            const url = `${PUBLIC_API_ENDPOINT_HOST}/auth/signin`;
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-type': 'application/json',
                }
            });
            const result = await response.json();
            if (result.type === 'failed' && result.message)
            {
                setMessage(result.message);
            } 
            else if (result.type === 'success' && result.auth === 'true')
            {
                await AsyncStorage.setItem('token', JSON.stringify(result.token));
                await AsyncStorage.setItem('provider', 'Server');
                await AsyncStorage.setItem('profile', JSON.stringify(result.user));
                navigation.navigate('Home');
            }
        }
        catch(err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }
        finally
        {
            setLoading(false);
            retrieveToken();
        }

    }


    //signin to google
    const [request, response, promptAsync] = Google.useAuthRequest(
        {
            androidClientId: CLIENT_ID_ANDROID,
            iosClientId: CLIENT_ID_IOS,
            webClientId:CLIENT_ID_WEB,
            scopes: ['profile', 'email'],
            redirectUri:REDIRECT_URL,
            selectAccount:true,
        }
        // { authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth' }
    );

    const signinWithGoogle = async () => {
        promptAsync();
    }

    const handleSignInWithGoogle = async () => {
        try
        {
            setLoading(true);
            if (response?.type === 'success')
            {
                const userInfo = await getGoogleUserInfo(response.authentication?.accessToken);
                if (!userInfo)
                {
                    alert('Something went wrong, Try again later.');
                    navigation.navigate('Signup');
                } else {

                    const userProf = {
                        id: userInfo.id,
                        name: `${userInfo.given_name} ${userInfo.family_name}`,
                        email: userInfo.email,
                        profile_pic: userInfo.picture
                    }
                    setUser(userProf);
                    await AsyncStorage.setItem('token',JSON.stringify(response.authentication?.idToken));
                    await AsyncStorage.setItem('provider','Google');
                    await AsyncStorage.setItem('profile', JSON.stringify(userProf));
                    setAUTH(true);
                }
            }
        }
        catch (err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }
        finally
        {
            setLoading(false);
            await retrieveToken();
        }
    }

    const getGoogleUserInfo =  async (token: string | undefined) => {

        if (!token) return;

        try
        {   
            const response = await fetch(GOOGLE_FETCH_USER_INFO, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const userInfo = await response.json();
                return userInfo;
            } else {
                console.error('Error fetching user info:', response.status, response.statusText);
                return null;
            }
        }
        catch(err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }
    }
    
    const forgetPassword = async (email: string) => {

        setLoading(true);

        if (!email)
        {
            return alert('Please enter your email');
        }

        const userEmail = {
            email: email,
        }

        try
        {
            
            const url = `${PUBLIC_API_ENDPOINT_HOST}/auth/forget-password`;
            const response = await fetch(url, {
                method:'POST',
                body:JSON.stringify(userEmail),
                headers:{
                    'Content-type':'application/json',
                }
            })
            const result = await response.json();
            console.log(result);
            if (result.type && result.message)
            {
                setResult(result);
            }
            else
            {
                alert('Something went wrong');
            }
        }
        catch(err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
        }
    }

    const logout = async () => {

        try
        {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('profile');
            await AsyncStorage.removeItem('provider');
            setAUTH(false);
            setUser(null);
            setProvider(null);
            navigation.navigate('Signin');
        }
        catch(err)
        {
            alert('Aww! Something went wrong. Check your internet connection.');
        }

    }

    useEffect( () => {
        const checkToken = async () => {
            await retrieveToken();
        }
        checkToken();
        WebBrowser.maybeCompleteAuthSession();
    },[]);

    useEffect( () => {
        if (response) {
            handleSignInWithGoogle();
        }
    },[response]);

    const value = {
        AUTH,
        user,
        loading,
        provider,
        result,
        message,
        retrieveToken,
        signup,
        signin,
        logout,
        signinWithGoogle,
        forgetPassword
    }

    return(
        <AuthManagementContext.Provider value={value}>
            {children}
        </AuthManagementContext.Provider>
    )

}

export default Auth;
