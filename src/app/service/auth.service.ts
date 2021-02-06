// auth.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: Observable<any>;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then((value) => {
                var user = value.user;
                console.log('Success!', user);

            })
            .catch((err) => {
                console.log('Something went wrong:', err.message);
                if(err.code ="auth/email-already-in-use"){
                    alert("User Exist Try logging in !")
                }
            });
    }

    login(email: string, password: string) {
        this.firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .then((value) => {
                console.log('Nice, it worked!',value);
                var user = value.user;
                console.log('Success!', user);
                this.getUser()
            })
            .catch((err) => {
                console.log('Something went wrong:', err.message);
               
            });
    }
    getUser(){
        this.firebaseAuth.currentUser.then(
            value=>{
                console.log(value)
            }
        )
    }
   
      
    logout() {
        this.firebaseAuth.signOut();
    }
}
