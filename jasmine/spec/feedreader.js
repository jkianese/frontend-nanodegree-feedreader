/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined and not empty', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);  
            }); 
        }); 


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(''); 
            });
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('the menu', function() {
        const body = document.body;
        const menu = document.querySelector(".menu-icon-link");  
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('the menu element is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true); 
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('menu toggles on and off', function() {
            menu.click(); 
            expect(body.classList.contains('menu-hidden')).toBe(false); 
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true); 
         }); 
    });
    
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        const feed = document.querySelector('.feed');  
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loadFeed is called and completes its work', function() {
            expect(feed.children.length > 0).toBe(true); 
        });
    });             
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {        
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        const initialFeed = [];

        beforeEach(function(done) {
            
            loadFeed(0, function() {
                initialFeed = document.querySelector('.feed').innerHTML;
            });   
            
            loadFeed(1, function() { 
                done(); 
            });
        }); 

        it('content changes when new feed is loaded', function() {
            const newFeed = document.querySelector('.feed').innerHTML 
            expect(newFeed).not.toBe(initialFeed); 
        });
    });     
}());

/*  Resources consulted during completion of this project:
 *  
 * Matt Crawford's Walthrough Series<br>
 * https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/
 *
 *  Udacity: Feed Reader Testing using Jasmine by Ben Cunningham<br>
 *  https://www.youtube.com/watch?v=_XwH-xfvydw
 *
 *  Grow with Google and Udacity FEND Resources<br>
 *  https://www.diigo.com/outliner/fjsk23/Udacity-Feed-Reader-Testing-(project-%234)?key=i5xqspbzvg    
