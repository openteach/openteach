import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const Books = new Mongo.Collection('books');

export const convertToUrlStr = function(str)
{
    if(typeof str !== "string")
        throw "String has to be supplied"
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g,' ')
        .replace(/ +/g,'-');
}

export const Chapter = Class.create({
    name: 'Chapter',
    /* No collection attribute */
    fields: {
        meta: Object,
        content: String,
        urlTitle : String,
    },
    events: {
        beforeSave(e) {
            // update url field to match title
            const doc = e.currentTarget;
            doc.urlTitle = convertToUrlStr(doc.meta.title);
        }
    }
});

export const Book = Class.create({
    name: 'Book',
    collection: Books,
    fields: {
        title: String,
        urlTitle : String,
        slug : String, // gradually transitioning to this
        index: Chapter,
        chapters : [Chapter]
    },
    events: {
        beforeSave(e) {
            // update url field to match title
            e.currentTarget.urlTitle = convertToUrlStr(e.currentTarget.title);
        }
    },
    behaviors: {
        slug: {
            // The field name from which a slug will be created.
            fieldName: 'title',
            // The helper name that generates a value for the slug-ification process.
            methodName: null,
            // The field name where a slug will be stored.
            slugFieldName: 'slug',
            // A flag indicating if we can update a slug.
            canUpdate: true,
            // A flag indicating if a slug is unique.
            unique: true,
            // A separator used for generating a slug.
            separator: '-'
        }
    },
    meteorMethods: {
        getBySlug(slug) {
            return this.findOne({slug : slug});
        }
    }
});

globalizeData({ Books }, { Book });
