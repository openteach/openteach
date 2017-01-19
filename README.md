# Open Teach
Platform for online teaching.

OpenTeach is an online open source platform for educators. With OpenTeach,
educators will be able to hold their own private lessons, courses and lectures
online.

we emphasize:

* __Data Control:__ All data is in the hand of the instructor. We
  do not take any data as prisoner, and changing platform should be
  easy.
* __Philosophical emphasis:__
    - Communication
    - Feedback over assessment
    - Writing teaching material on demand (and develop it lean)

## Deploying (DigitalOcean)
Start a virtual machine on digital ocean (using `docker-machine`):

```
docker-machine create \
--driver=digitalocean \
--digitalocean-access-token=[API KEY] \
--digitalocean-size=512mb \
--digitalocean-region=fra1 \
--digitalocean-private-networking=true \
--digitalocean-image=ubuntu-16-04-x64 \
openteach
```

With docker use following docker compose template for a `docker-compose.yml`
file.

```
openteach:
  image: kadirahq/meteord:base
  restart: always
  ports:
   + "80:80"
  links:
   + mongo
  environment:
   + MONGO_URL=mongodb://mongo/meteor-db
   + ROOT_URL=http://[YOUR DOMAIN]
   + BUNDLE_URL=https://raw.githubusercontent.com/openteach/release/master/releases/[RELEASE].tar.gz
   + METEOR_SETTINGS=[CONTENT OF SETTINGS.JSON]
mongo:
  image: mongo:latest
```

Then setup by

1. `eval $(docker-machine env openteach)`
2. `docker-compose up -d`

Lastly go to the site and log in using the mail from the `settings.json`
file with the password _openteach_.

## Development

### Setup
Four easy steps to get started from the terminal:

1. Clone this repository:
    - `git clone git@github.com:openteach/openTeach.git`
    - Go into the openTeach folder with `cd openTeach`
2. make a settings file in the root folder
    - `touch settings.json`
3. Copy and paste the template below into the settings.json file
4. Edit the new `settings.json` file with your GitHub personal access token.

```
{
  "githubApi" : {
      "access_token" : "GitHub personal access token"
  },
  "instructor" : {
      "ghUser" : "openteach",
      "ghRepo" : "test-instructor",
      "email"  : "example@example.com"
  },
  "public": {
      "instructorName"   : "Mads Buch"
  }
}
```

__GitHub personal access token:__

* Go to your GitHub __settings__ in top right corner.
* In the left menu click __Personal access tokens__.
* In top right corner choose __Generate new token__.
* Copy and paste the generated token and replace the
  __`GitHub personal access token`__ in settings.json file with the new token.

__Now__ run `meteor npm install` to install dependencies.

### Running Locally
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

#### Endpoints
For importing stuff from github, invoke following API endpoint:

```
http://localhost:3000/api/v1/import/github
```

## Create a release
If you adopt this project and which to create a deployment file, follow following
steps.

1. Run `meteor build --architecture=os.linux.x86_64 ./` in the library
2. Move the newly created file, `openteach.tar.gz`, to a public location on
   the web
3. Update the docker compose file from the deployment section.
4. Do a `compose up -d`.

### Documentation
Documentation is available in the handbook folder

### Collaboration
This is an open source project, and as such we do not take any responsibility
or are in any ways liable for the project. Everybody are more than welcome to
use the software.
