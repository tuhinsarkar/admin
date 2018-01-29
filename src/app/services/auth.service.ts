import { Injectable } from "@angular/core";
import { AppConst, SECURE_TOKEN_KEY, USER } from '../shared/shared.constant';

@Injectable()
export class AuthService {
    isUserLoggedIn(): boolean {
        return sessionStorage.getItem(SECURE_TOKEN_KEY) == null || sessionStorage.getItem(SECURE_TOKEN_KEY) === "" ? false : true;
    }
    getLoggedInUserName(): string {
        return sessionStorage.getItem(USER) == null ? "" : sessionStorage.getItem(USER);
    }
    setLoginData(userData: string, userName: string): void {
        sessionStorage.setItem(SECURE_TOKEN_KEY, userData);
        sessionStorage.setItem(USER, userName);
    }
    deactivateSession(): void {
        sessionStorage.removeItem(SECURE_TOKEN_KEY);
        sessionStorage.removeItem(USER);
    }
}