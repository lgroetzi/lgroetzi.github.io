'use strict';

class navigation {
    render() {
        <div className="navigation">
            <ul>
                <li><a href="#">my work</a></li>
                <li><a href="#">my resume</a></li>
                <li><a href="#">my side gig</a></li>
            </ul>
        </div>
    }
}

let domContainer = document.querySelector('#navigation');
ReactDOM.render(<navigation />, domContainer);