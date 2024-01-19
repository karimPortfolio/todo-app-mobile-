import React, { createContext, useEffect, useState } from "react";
import 'core-js/stable/atob';
import { AuthContext } from "../../types/contextTypes/Auth";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode, JwtPayload} from 'jwt-decode';
import { PUBLIC_API_ENDPOINT_HOST, CLIENT_ID } from '@env';
import { navigationRef } from "../RootNavigation";
import { GoogleSignin } from '@react-native-community/google-signin';
import { googleSigninInitialize } from '../../config/GoogleSignin';

const defaultValue = {
    AUTH: false,
    user: {},
    loading: false,
    retrieveToken: () => {},
    signup: (name: string, email:string, password: string, confirmPassword: string) => {},
    signin: (email:string, password: string) => {},
    logout: () => {}
} as AuthContext

export const AuthManagementContext = createContext(defaultValue);

const Auth = ({children}: {children: React.ReactNode}) => {

    const [AUTH, setAUTH] = useState<boolean>(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigation = navigationRef;


    const retrieveToken = async () => {

        try
        {
            const token = await AsyncStorage.getItem('token');
            const profile = await AsyncStorage.getItem('profile');

            console.log(`
                Token:${token},
                Profile:${profile}
            `);

            if (token && token !== null && profile)
            {
                const currentTimeInSeconds = Math.floor(Date.now() / 1000);
                const decode = await jwtDecode<JwtPayload>(token);
                if (!decode || !decode.exp || decode.exp <= currentTimeInSeconds)
                {
                    navigation.navigate('Signup');
                    alert('Session expired, please signin to continue.');
                    setAUTH(false);
                    setUser(null);
                    await AsyncStorage.removeItem('token');
                    await AsyncStorage.removeItem('profile');
                }
                else
                {
                    setAUTH(true);
                    setUser(JSON.parse(profile));
                    console.log('no problem')
                    // console.log('Auth state:'+AUTH);
                }
                
            }
            else
            {
                setAUTH(false);
                setUser(null);
                console.log('problem')
            }
            
        }
        catch(err)
        {
            throw new Error(err);
        }
        
    }
    
    //signup handling
    const signup = async (name: string, email: string, password: string, confirmPassword: string) => {

        setLoading(true);
        const user = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
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
                alert(result.message);
            } 
            else if (result.type === 'success' && result.auth === 'true')
            {
                await AsyncStorage.setItem('token', JSON.stringify(result.token));
                await AsyncStorage.setItem('profile', JSON.stringify(result.user));
                navigation.navigate('Home');
            }
        }
        catch (err)
        {
            console.log(err);
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
                alert(result.message);
            } 
            else if (result.type === 'success' && result.auth === 'true')
            {
                await AsyncStorage.setItem('token', JSON.stringify(result.token));
                await AsyncStorage.setItem('profile', JSON.stringify(result.user));
                navigation.navigate('Home');
            }
        }
        catch(err)
        {
            console.log(err);
        }
        finally
        {
            setLoading(false);
            retrieveToken();
        }

    }


    const signinWithGoogle = () => {
        
    }

    
    const logout = async () => {

        try
        {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('profile');
            setAUTH(false);
            setUser(null);
            navigation.navigate('Signin');
        }
        catch(err)
        {
            console.log(err)
        }

    }

    useEffect( () => {
        const checkToken = async () => {
            await retrieveToken();
        }
        googleSigninInitialize();
        checkToken();
    },[])

    const value = {
        AUTH,
        user,
        loading,
        retrieveToken,
        signup,
        signin,
        logout
    }

    return(
        <AuthManagementContext.Provider value={value}>
            {children}
        </AuthManagementContext.Provider>
    )

}

export default Auth;
