// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by github-mongo-sync.js.
import { name as packageName } from "meteor/github-mongo-sync";

// Write your tests here!
// Here is an example.
Tinytest.add('github-mongo-sync - example', function (test) {
  test.equal(packageName, "github-mongo-sync");
});
