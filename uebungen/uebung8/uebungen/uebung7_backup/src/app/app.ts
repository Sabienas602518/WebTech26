import { Component, OnInit } from '@angular/core';
import { MemberService } from './member';
import { Member } from './members';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements OnInit {

  allMembers: Member[] = [];
  filteredMembers: Member[] = [];

  constructor(private memberService: MemberService) {}

  async ngOnInit() {
    this.allMembers = await this.memberService.getMembers();
    this.filteredMembers = this.allMembers;
  }

  onSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredMembers = this.allMembers.filter(m =>
      m.forename.toLowerCase().includes(term) ||
      m.surname.toLowerCase().includes(term)
    );
  }
}