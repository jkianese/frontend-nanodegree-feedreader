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
        
        it('URL is defined and URL is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);  
            }); 
        }); 

        it('name is defined and name is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(''); 
            });
        });
    });

    describe('the menu', function() {
        const body = document.body;
        const menu = document.querySelector(".menu-icon-link");  
       
        it('the menu element is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true); 
        });

         it('menu toggles on and off', function() {
            menu.click(); 
            expect(body.classList.contains('menu-hidden')).toBe(false); 
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true); 
         }); 
    });
   
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loadFeed is called and completes its work', function() {
            const feed = document.querySelectorAll('.feed .entry'); 
            expect(feed.length).not.toBe(0); 
        });
    });             

    describe('New Feed Selection', function() {        
        
        let initialFeed = []; 
        let newFeed = []; 

        beforeEach(function(done) {
            loadFeed(0, function() {
                initialFeed = document.querySelector('.feed').innerHTML;

                loadFeed(1, function() {
                    newFeed = document.querySelector('.feed').innerHTML; 
                    done(); 
                }); 
            });
        });
        it('content changes when new feed is loaded', function() {
            expect(newFeed).toBe(initialFeed); 
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
 */    