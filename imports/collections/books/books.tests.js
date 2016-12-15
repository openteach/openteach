import { resetDatabase } from 'meteor/xolvio:cleaner';
import { assert } from 'meteor/practicalmeteor:chai';

import {Book, Chapter} from './books.js'

describe('Books Collection', function () {

    it("can test", function(){
        // TODO: Remove this when more tests are added
        assert.equal(2, 2);
    })

    if(Meteor.isServer){
        describe('Slug test 1', function () {
            beforeEach(function () {
                resetDatabase();
            });

            it("can slug already slugged", function(){
                let t = new Book({
                    title : "slug-style-string-4",
                    index : new Chapter({
                        meta : {
                            title : "ff"
                        },
                        content : "some content"
                    }),
                    chapters : []
                });
                t.save();
                assert.equal(t.slug, "slug-style-string-4");
            });

            it("can slug alphanumeric", function(){
                let t = new Book({
                    title : "Slug Style String 4",
                    index : new Chapter({
                        meta : {
                            title : "ff"
                        },
                        content : "some content"
                    }),
                    chapters : []
                });
                t.save();
                assert.equal(t.slug, "slug-style-string-4");
            });

            it("can slug special character 1", function(){
                let t = new Book({
                    title : "Slug Style String 4 æøå",
                    index : new Chapter({
                        meta : {
                            title : "ff"
                        },
                        content : "some content"
                    }),
                    chapters : []
                });
                t.save();
                assert.equal(t.slug, "slug-style-string-4-aeoa");
            });

            it("can slug special character 2", function(){
                let t = new Book({
                    title : "Slug Style String 4 ë ê ẽ",
                    index : new Chapter({
                        meta : {
                            title : "ff"
                        },
                        content : "some content"
                    }),
                    chapters : []
                });
                t.save();
                assert.equal(t.slug, "slug-style-string-4-e-e-e");
            });

            it("can slug spaces", function(){
                let t = new Book({
                    title : "Slug Style                    String",
                    index : new Chapter({
                        meta : {
                            title : "ff"
                        },
                        content : "some content"
                    }),
                    chapters : []
                });
                t.save();
                assert.equal(t.slug, "slug-style-string");
            });
        });
    }
});
