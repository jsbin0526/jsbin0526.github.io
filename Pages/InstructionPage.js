export default class InstructionPage {
    render() {
        return /*html*/`
        <div class="instruction">
            <img src="../Images/profile.jpg" class="profile-image">
            <div>
                <div>
                    <h2>Hi! My name is Seonbin Ji!</h2>
                    <p>I am majoring in the department of Computer Engineering in Kangwon National University.</p>
                    <p>I am going to enlist korean army after finishing first semester.
                </div>
                <br/>
                <div>
                    <h2>Interests</h2>
                    <ul>
                        <li>Problem Solving with Python</li>
                        <li>Web Programming 😃</li>
                        <li>System Programming 😂</li>
                        <li>Mobile Programming 🤔</li>
                    </ul>
                </div>
                <div>
                    <h2>Links</h2>
                    <ul style="list-style:none;padding-left:0px">
                        <li style="display:inline;"><a href="https://github.com/jsbin0526"><img src="../Images/github-mark.svg"></a></li>
                        <li style="display:inline;"><a href="https://www.acmicpc.net/user/jsbin0526"><img width="98px" src="../Images/baekjoon-mark.svg"></a></li>
                    </ul>
                </div>
            </div>
        `;
    }
}