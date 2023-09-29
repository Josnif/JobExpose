import React, { useEffect, useState, useContext } from 'react';
import { useRootNavigation, useRouter, useSegments } from 'expo-router';
import { appwrite } from '../lib/services/appwrite-service';

const AuthContext = React.createContext(undefined);

export function Provider(props) {
    const [user, setAuth] = React.useState(null);
    const [authInitialized, setAuthInitialized] = React.useState(false);

    const useProtectedRoute = (user) => {
        const segments = useSegments();
        const router = useRouter();

        const [isNavigationReady, setNavigationReady] = useState(false);
        const rootNavigation = useRootNavigation();

        useEffect(() => {
            const unsubscribe = rootNavigation?.addListener('state', (event) => {
                setNavigationReady(true);
            });
            return function cleanup() {
                if (unsubscribe) {
                    unsubscribe();
                }
            };
        }, [rootNavigation]);

        React.useEffect(() => {
            if (!isNavigationReady) {
                return;
            }

            const inAuthGroup = segments[0] === '(auth)';

            if (!authInitialized) return;

            if (!user && !inAuthGroup) {
                router.push('/login');
            } else if (user) {
                router.push('/home');
            }
        }, [user, segments, authInitialized, isNavigationReady]);
    };

    useEffect(() => {
        (async () => {
            try {
                const user = await appwrite.account.get();
                console.log(user);
                setAuth(user);
            } catch (error) {
                console.log('error', error);
                setAuth(null);
            }

            setAuthInitialized(true);
            console.log('initialize ', user);
        })();
    }, []);

    const logout = async () => {
        try {
            const response = await appwrite.account.deleteSession('current');
            return { error: undefined, data: response };
        } catch (error) {
            return { error, data: undefined };
        } finally {
            setAuth(null);
        }
    };

    /**
     *
     * @param email
     * @param password
     * @returns
     */
    const login = async (email, password) => {
        try {
            console.log(email, password);
            const response = await appwrite.account.createEmailSession(
                email,
                password
            );

            const user = await appwrite.account.get();
            setAuth(user);
            return { data: user, error: undefined };
        } catch (error) {
            setAuth(null);
            return { error: error, data: undefined };
        }
    };

    /**
     * 
     * @param email 
     * @param password 
     * @param username 
     * @returns 
     */
    const createAccount = async (email, password, username) => {
        try {
            console.log(email, password, username);

            await appwrite.account.create(
                appwrite.ID.unique(),
                email,
                password,
                username
            );

            await appwrite.account.createEmailSession(email, password);

            const user = await appwrite.account.get();
            setAuth(user);
            return { data: user, error: undefined };
        } catch (error) {
            setAuth(null);
            return { error: error, data: undefined };
        }
    };

    useProtectedRoute(user);

    return (
        <AuthContext.Provider
            value={{
                signIn: login,
                signOut: logout,
                signUp: createAccount,
                user: user,
                authInitialized: authInitialized,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error('useAuth must be used within an AuthContextProvider');
    }

    return authContext;
};
