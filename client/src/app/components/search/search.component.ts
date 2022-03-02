import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = "";
  faSearch = faSearch

  
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit(): void {
    
  }

  searchGame(){
    this.searchService.sendSearchQuery(this.search);
  }

  goToHome(){
    this.router.navigate(['']);
  }

}
