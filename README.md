# NestJS Authentication and Authorization Application

A application for authentication and authorization application with NestJS framework with dummy UI. You can use this application on your own application to handle user authentication and authorization. This application uses JWT method for authentication and authorization.

## Installation

To use this application with dummy interface, you should donwload *node* and *MongoDB*.

First of all, clone project from Github.

```bash
git clone https://github.com/pak-app/nestjs-auth-app.git
```

### Backend Installation(node)

There is guide to install [*NodeJS*](https://nodejs.org/en/download) for your own OS.

After installing *NodeJS* you can verify `node` and `npm` using these commands:

```bash
node -v # verify node
npm -v # verify npm
```

#### Run application

To run this application there is two methods:

* On local machine
* Docker container

**On local machine:** Do each step to run node app on local machine.

1. Installing dependencies:

   ```bash
   cd nestjs-auth-app
   npm i
   ```

2. Run app: Use this command to run node application.

   ```bash
   npm run start:dev
   ```

### Database(MongoDB)

You can install MongoDB from official site in your local OS or you can using MongoDB Docker container to run it. For second method you should install `docker` and `docker compose` plugin to use this database. It is suggested to run MongoDB on docker container.

**Docker:** After `docker` and `docker compose` installation you can run the database via `docker-compose.yaml` file, it is automatically download images and run the services.

There is two important environment variables to authenticate user to access database.

* `MONGO_INITDB_ROOT_USERNAME`: Username of user
* `MONGO_INITDB_ROOT_PASSWORD`: Password of user

They set on `docker-compose.yaml` file and you can customize it.

**Run container:** To run only the database you can use this command:

*For Linux:*

```bash
sudo docker compose mongodb up -d
```

*For Windows:*

```bash
docker-compose mongodb up -d
```

**Database port and host:** If you running auth application(node application), be carefull use correct **database URI** inside `.env` file. There is some comment guide to use correct URI on `.env` file.
