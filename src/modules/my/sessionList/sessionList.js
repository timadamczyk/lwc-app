import { LightningElement, track } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    @track sessions = [];
    connectedCallback() {
        getSessions().then(result => {
            this.sessions = this.allSessions = result;
            window.console.log(
                'here is your log hehe:',
                JSON.stringify(this.sessions)
            );
        });
    }
    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter(session =>
            session.name.toLowerCase().includes(searchKey)
        );
    }
}
