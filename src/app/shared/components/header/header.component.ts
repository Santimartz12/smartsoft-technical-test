import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  username = '';

  constructor(
    private router: Router,
    private authServices: AuthService,
    private stgStorage: StorageService,
  ){

  }

  ngOnInit(): void {
    this.username = this.stgStorage.loadInStorage('username');
  }

  logOut(){
    this.authServices.logOutUser();
    this.router.navigate(['login'])
  }

}
