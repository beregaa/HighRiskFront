class TokenService {
    getLocalRefreshToken() {
        const userString = localStorage.getItem('user');
        if (userString !== null) {
            const user = JSON.parse(userString);
            return user?.refreshToken;
        } else {
            return null;
        }
    }

    getLocalAccessToken() {
        try {
            const userString = localStorage.getItem('user');

            if (userString !== null) {
                const user = JSON.parse(userString);
                return user.accessToken;
            } else {
                return null;
            }
        } catch (err) {
            return null;
        }
    }

    updateLocalAccessToken(token: any) {
        const userString = localStorage.getItem('user');
        if (userString !== null) {
            const user = JSON.parse(userString);
            user.accessToken = token;
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            return null;
        }
    }

    getUser() {
        try {
            const userString = localStorage.getItem('user');
            if (userString !== null) {
                return JSON.parse(userString);
            } else {
                return null;
            }
        } catch (err) {
            return false;
        }
    }

    setUser(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem('user');
    }
}

export default new TokenService();
