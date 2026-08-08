import { Service } from '@angular/core';
import { Member } from '../member';

@Service()
export class Dataservice {

    async getAllMembers() : Promise<Member[]>
        {
        const response = await fetch('assets/members.jason')
        console.log('response in service : ', response)
        const members = await response.json();
        console.log('members in service : ', members)
        return members;
    }

}
