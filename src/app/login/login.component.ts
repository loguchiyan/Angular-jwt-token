import { Component} from '@angular/core'
import { AuthService } from '../shared/services/auth.service';

@Component({
    templateUrl:'./login.component.html'
})
export class LoginComponent{

    constructor(private authService:AuthService){}

    loginData = {
        username:'',
        password:''
    };

    userLogin(){
        this.authService.userLogin(this.loginData);
        alert("user logged in successfully");
    }
}