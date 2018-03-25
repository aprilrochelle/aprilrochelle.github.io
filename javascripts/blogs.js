var blogs = [
    {
      id: "blog1", 
      title: "Getting Started: HTML, CSS & Github", 
      date: "02/25/2018", 
      post: "I must admit that I wasn't too thrilled upon first hearing that we would be blogging about our NSS journey weekly. I thought, 'Great. Yet another thing to add to my already full plate.' But now, a few class meetings in, I think it's not such a bad idea. With all that I feel I'm learning already, it should be quite interesting to get to the end of the program, look back and read all the mile markers along the way. The first thing that I've learned... or maybe that's been reinforced... is that I can always begin again or try something new. I'm extremely grateful for the opportunity to do so through this program. My initial anxiety about having been out of school for such a long time has been quelled by the kindness and reassurance of patient instructors... not to mention a great, hands-on program featuring instruction on concepts that are immediately usable in the real world. As far as course content is concerned, I'm not really sure what I learned first. It appears that my confidence takes a while to catch up with my knowlegde. So I learn things before I'm really confident that I know them, if that makes any sense at all. Our first couple class meetings were spent on HTML and CSS, much of which was review since the pre-work covered both subjects in detail. I did learn about the abbreviation tag, which was unknown to me before. I also learned that boilerplate code, containing tags for document type, head, body, title, and stylesheet links, is the minimum code for creating a web page. One major thing that I learned in our time spent on CSS is that specificity rules: the more specific the selector, the higher its priority in styling where conflicts may arise. Through the CSS Diner exercise, I strengthened my understanding of special selectors like nth-of-child and selectors based upon an element's relationship to another element. The terminal, git and Github, although covered by Treehouse courses in the pre-work, started off feeling rather foreign to me. It has been ages since I've dealt with the terminal or typing in the command line; so the thought of going back to it was pretty intimidating. However, so far I've learned about directories and how to navigate between them using the terminal instead of the finder. Still rusty on a few commands/actions, especially when it comes to moving files, but I'm getting there. I've learned about repositories - both local and origin - and I'm growing more comfortable with the process of pushing to and pulling from Github. I've learned about the concept of branching and why it's useful when collaborating with others on group projects. It looks like we'll soon be putting that knowledge to use with group assignments; so I'm looking forward to the confidence boost once it's completed."
    },
    {
        id: "blog2", 
        title: "The JavaScript Crash", 
        date: "03/5/2018", 
        post: "This week's experience for me can actually be summed up in one word: Yuck. However, for the sake of providing myself (and any others who might care about my journey) with something remotely substantive to read later on, I'll expound (a little) further. The intro to JavaScript Arrays was a crushing blow to my ego. Like a Tyson-in-his-prime blow. I was feeling pretty good about myself after our walk through last week's material, only for my confidence to plummet face-down into the concrete when the array exercises were given. Don't get me wrong: the overall concepts were presented well, and I felt like I understood them. And I didn't expect to completely master the exercises on the first bite. I can handle trying something and getting it wrong. You figure out the misstep, make a tweak and go on. But my frustration came in because I didn't feel like I knew how to even begin to approach the exercises. I just felt completely and utterly lost. Then came the discussion on objects and functions. Again, I felt like I understood the lecture, but then felt pretty lost in approaching the exercises. I realized that one struggle I was having was with how much html coding could be done with JavaScript. We did one exercise that involved using if else statements to assign classes to objects and creating CSS rules based on those classes. It literally blew the top off my head because I was assuming it would be harder - or rather, involve more coding in the html file - than was necessary, since linking to a stylesheet was involved. Add to all this: our group has trouble 'grouping' at times. Fortunately, I don't think that the reason has anything to do with competitiveness. It just seems like we have a group full of introverts, and maybe the ones who understand a little more aren't sure how to help without feeling like they may just be giving away the answer; so we end up all just kind of working (or crying) in silence sometimes. Silver lining: we seem to be getting better though. Our Slack conversation today has been more active. So I'm glad about that. And mysteriously, somewhere between contemplating my life choices in the shower Saturday night and today (Sunday night), a little of the fog has lifted it seems. Maybe. I'm not sure. And I really don't even know how. Like I actually got through 4 of the 5 object challenges and I've completed 3 of the 5 function challenges so far. With minimal help even! I still have a couple questions and need to revisit some of the array challenges I didn't finish, but I might actually be understanding a little something again! So hooray for me being off suicide watch!"
    },
    {
        id: "blog3", 
        title: "More JavaScript. Double Yuck.", 
        date: "03/12/2018", 
        post: "So, I won't say that I'm quite ready to jump off a bridge, but I will say that our next group meeting could totally be at a bar and I'd be just fine with that. This past week's 'fun' little project was creating a holiday greeting translator, which also involved setting up a project in GitHub (so that we could get accustomed to how coding projects will actually go in the real world with the creation of tickets). I was nervous about the assignment from the jump, because, well, it IS JavaScript again. But it wasn't a total train wreck. So I guess that's good. My understanding of objects and functions had grown some from the previous week, which helped me to at least get off to a good start. Although I'm close to making it work, I apparently have a bug in my code that keeps the actual translation from showing up without the word 'undfined' before it. Still trying to figure out how to get rid of that. I am happy to report that I successfully coded an event listener for the translator buttons though. The class discussions we had on using GitHub in teams were pretty helpful. Feeling pretty confident in my ability to create, modify, work from and review tickets with my team, although I'm still feeling may way through how best to divide up the work into tickets. Still waiting on this JavaScript confidence to catch up though."
    },
    {
        id: "blog4", 
        title: "ES6, the DOM & Markdown", 
        date: "03/25/2018", 
        post: "Much better since the last entry. This practice with JavaScript has been frustrating at times, to say the least, but very much helpful. This week, we finally got to ES6, which I love since it makes the code cleaner and more concise. Excited about having completed my first single-page (super simple) app with the travel diary. Still working on a few of the bonus tasks, but I have an app that functions as it should and looks pretty good. Win! Very helpful instruction this week on traversing the DOM so that we can do more with event listeners. After the lesson on Markdown, I'm not super excited to go back through previous work to add Readme content, but I know it'll be beneficial, so I'm good with developing these good habits on the front end for potential employers later on."
    }
  ]


function writeToDom(input, divId) {
    document.getElementById(divId).innerHTML += input;
}

function createBlogPosts(array) {
    var blogPost= '';
    array.forEach(function(blogObj) {
        blogPost += `<h3 class="proj-id">${blogObj.id}</h3>`;
        blogPost += `<h2 class="proj-title">${blogObj.title}</h2>`;
        blogPost += `<p>${blogObj.date}<p>`;
        blogPost += `<p>${blogObj.post}</p>`;
    });     
    writeToDom(blogPost, "blog");
}

createBlogPosts(blogs);