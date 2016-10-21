import { importRepoData } from '../../api/repositories/methods.js';

// We do development
if(Meteor.isDevelopment){
    import './develop.js'
} else {
    // explicitly import data
    importRepoData();
}
