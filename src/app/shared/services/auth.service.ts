import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthService {
    userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
    jwtHelper = new JwtHelperService();

    userLogin(userPayload: any){
        console.log(userPayload);
        const accesstoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
        const refreshtoken = "dummy";

        localStorage.setItem("access_token", accesstoken);
        localStorage.setItem("refresh_token", refreshtoken);

        const decryptedUser = this.jwtHelper.decodeToken(accesstoken);
        console.log(decryptedUser);

const data = {
    access_token : accesstoken,
    refresh_token : refreshtoken,
    username: decryptedUser.username,
    userid: decryptedUser.sub,
    tokenExpiration: decryptedUser.exp
};
this.userInfo.next(data);
    }
}