import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

import { globalizeData } from '../../helpers';

const Books = new Mongo.Collection('books');

const convertToUrlStr = function(str)
{
    if(typeof str !== "string")
        throw "String has to be supplied"
    return str
        .toLowerCase()
        .replace(/[^\w ]+/g,' ')
        .replace(/ +/g,'-');
}

export const Meta = Class.create({
    name: 'Meta',
    /* No collection attribute */
    fields: {
        title : String
    }
});

export const Chapter = Class.create({
    name: 'Chapter',
    /* No collection attribute */
    fields: {
        meta: Meta,
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
        // Fields are populated from the Book.md meta info

        title: String,
        price : { // How much does the book cost, 0 (or no value) means free
            type: Number,
            optional: true,
            default : 0
        },
        currencyCode : { // How much does the book cost, 0 (or no value) means free
            type: String,
            optional: true,
            default : "EUR"
        },
        description : {
            type : String,
            optional : true,
            default : "[No description provided]"

        },
        slug : {
            type: String,
            optional: true
        },
        index: Chapter,
        chapters : [Chapter]
    },
    behaviors: {
        slug: {
            fieldName: 'title',
            methodName: null,
            slugFieldName: 'slug',
            canUpdate: true,
            unique: true,
            separator: '-'
        },
        timestamp: {
            hasCreatedField: true,
            createdFieldName: 'createdAt',
            hasUpdatedField: true,
            updatedFieldName: 'updatedAt'
        }
    },
    meteorMethods: {
        getBySlug(slug) {
            return this.findOne({slug : slug});
        }
    },
    helpers : {
        getPrice(){
            if(this.price === 0)
                return "FREE";
            return this.currencyCode + " " + (this.price / 100.0).toFixed(2);
        }
    }
});

globalizeData({ Books }, { Book });
