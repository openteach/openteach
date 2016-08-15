# Open Teach
Platform for online teaching.

OpenTeach is an online open source platform for educators. With OpenTeach, educators will be able to hold their own private lessons, courses and lectures online. Everyone can in this way be a teacher and share their knowledge of one or more subjects they have a great interest and knowledge about. OpenTeach is the bridge that creates the way from teacher to student.

we emphasize:

* __Data Control:__ All data is in the hand of the instructor. We
  do not take any data as prisoner, and changing platform should be
  easy.

## Setup

Four easy steps to get started:

1. Clone this repository:
    - `git clone git@github.com:openteach/openTeach.git`
    - `cd openTeach`
2. make a settings file
    - `touch settings.json`
3. Copy the following below template into you new `settings.json` file

```
{
    "githubApi" : {
        "access_token" : "[GitHub oAuth Token]"
    },
    "instructor" : {
        "ghUser" : "openteach",
        "ghRepo" : "test-instructor"
    }
}
```
4. Edit the `settings.json`.
  * Go to your GitHub settings
  * In the left menu click 'Personal access tokens'.
  * In top right corner choose 'Generate new token'.
  * Copy paste the generated token and replace the ```[GitHub oAuth Token]``` with the new token.

## Running Locally
This projects can be run in two modes: As the normal app and for testing.

__Running as a normal app:__

```
meteor --settings settings.json
```

__Running tests:__

```
meteor test --driver-package practicalmeteor:mocha --port 3100
```

__Note:__ Tests are served on port `3100`. This is so that both an app and tests
may be run at the same time.


## Quick Start Guide
For more info, see the setup guide in the handbook folder.

## Documentation
Documentation is available in the handbook folder

## Collaboration
This is an open source project, and as such we do not take any responsibility
or are in any ways liable for the project. Everybody are more than welcome to
use the software.
