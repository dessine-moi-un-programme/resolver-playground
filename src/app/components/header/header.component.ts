import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoadingRoute: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe(() => { this.isLoadingRoute = true });

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => { this.isLoadingRoute = false });
  }

}
