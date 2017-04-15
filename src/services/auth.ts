import firebase from 'firebase';

export class AuthService {
  // method
  signup(email:string, password:string){
    // gara2 tanpa return ini jadi masalah gak bisa di then
    return firebase.auth().createUserWithEmailAndPassword(email, password);
    // dengan ini soal validasi akan di handle firebase google hehehh
  }

  signin(email:string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  logout(){
    firebase.auth().signOut();
    // delete token tinggal dipanggil di app.Component.ts
  }
}
