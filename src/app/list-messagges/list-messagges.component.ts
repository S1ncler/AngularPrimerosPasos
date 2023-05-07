import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-list-messagges',
  templateUrl: './list-messagges.component.html',
  styleUrls: ['./list-messagges.component.css']
})
export class ListMessaggesComponent {

  constructor(public messagesService : MessagesService){ }

}
